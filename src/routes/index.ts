import { Router } from 'express'

import sistemaRouter from './sistema.routes'

import falemaisRouter from './falemais.routes'
import origemdestinoRouter from './origemdestino.routes'
import planosRouter from './planos.routes'

const routes = Router();

routes.use('/', sistemaRouter);
routes.use('/', falemaisRouter);
routes.use('/', origemdestinoRouter);
routes.use('/', planosRouter);

export default routes;