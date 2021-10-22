import { Router } from 'express';

import controller from '../controllers/falemais.controller'

const router = Router();

router.get('/falemais/:origem/:destino/:plano/:minutos_falados', (req, res) => {
  //  #swagger.tags = ['Fale mais'] 
  //  #swagger.description = 'TESTE - API - Serviço de Integração'
 
  /* #swagger.responses[200] = {                 
          description: "SUCESSO - API - Serviço de Integração" } */

  controller.calculo(req, res)

})

export default router;