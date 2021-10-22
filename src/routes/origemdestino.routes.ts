import { Router } from 'express';

import controller from '../controllers/origemdestino.controller'

const router = Router();

router.get('/origemdestino', (req, res) => {
  //  #swagger.tags = ['Origem Destino'] 
  //  #swagger.description = 'TESTE - API - Serviço de Integração'

  /* #swagger.responses[200] = {                 
          description: "SUCESSO - API - Serviço de Integração" } */

  controller.all(req, res)        
})

export default router;