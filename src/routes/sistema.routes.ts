import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  //  #swagger.tags = ['Servidor'] 
  //  #swagger.description = 'TESTE - API - Serviço de Integração'
  //  console.log('SUCESSO - API - Serviço de Integração')
  res.send('SUCESSO - API')
  /* #swagger.responses[200] = {                 
          description: "SUCESSO - API - Serviço de Integração" } */
})

export default router;