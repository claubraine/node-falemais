import { Router } from 'express';

import controller from '../controllers/planos.controller';

const router = Router();

router.get('/planos', (req, res) => {
  //  #swagger.tags = ['Planos'] 
  //  #swagger.description = 'TESTE - API - Serviço de Integração'

  /* #swagger.responses[200] = {                 
          description: "SUCESSO - API - Serviço de Integração" } */

  controller.all(req, res)

})
router.get('/planos/:minutos', (req, res) => {
  //  #swagger.tags = ['Planos'] 
  //  #swagger.description = 'TESTE - API - Serviço de Integração'
  console.log(req.params.minutos)

  res.status(200).json({
    success: true,
    minutos: req.params.minutos,
    msg: `Sucesso`,
  });
 
  /* #swagger.responses[200] = {                 
          description: "SUCESSO - API - Serviço de Integração" } */
})

export default router;