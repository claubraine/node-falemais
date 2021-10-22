/*
Copyright (c) 2019 - present AppSeed.us
*/

import request from 'supertest';

import app from '../src/server/database_sqlite';
import { connect, connection, PrepareDB } from '../src/server/database_sqlite_conf';

beforeAll(async () => {
  PrepareDB();
  await connect();
});
afterAll(async () => connection?.close());

describe('SISTEMA', () => {
  // The most basic test
  test('SUCESSO - API', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        //expect(response.body.success).toBe(true);
        done();
      });
  });
});
describe('Fale Mais', () => {
  // The most basic test
  test('FaleMais 60', (done) => {
    request(app)
      .get('/falemais/011/017/60/80')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.plano).toBe("FaleMais 60");
        expect(response.body.minutos_excedentes).toBe(20);
        expect(response.body.custo_com_plano).toBe("R$ 37.4");
        expect(response.body.custo_sem_plano).toBe("R$ 152");
        done();
      });
  });  
});
