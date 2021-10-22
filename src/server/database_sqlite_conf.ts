import sqlite from 'sqlite3';

/* eslint-disable import/no-mutable-exports */
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

import modelOrigemdestino from '../models/sqlite/origemdestino'
import modelPlanos from '../models/sqlite/planos'

if (!process.env.SQLITE_PATH) {
  throw new Error('SQLITE_PATH environment variable is not set.');
}

const options: ConnectionOptions = {
  type: 'sqlite',
  database: process.env.SQLITE_PATH,
  entities: [modelPlanos , modelOrigemdestino],
  logging: true,
};

export let connection : Connection | undefined;

export const connect = async (): Promise<Connection | undefined> => {
  try {
    const conn = await createConnection(options);
    connection = conn;
    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export const PrepareDB = () => new sqlite.Database(':memory:');
