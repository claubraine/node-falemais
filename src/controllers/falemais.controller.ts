import { Request, Response } from 'express';

import Joi from 'joi'

import { connection } from '../server/database_sqlite_conf'

import modelOrigemdestino from '../models/sqlite/origemdestino'
import modelPlanos from '../models/sqlite/planos'

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true // remove unknown props
}

const calculoSchema = Joi.object().keys({


  origem: Joi.string().required().messages({
    'string.empty': `{{#label}} não pode ser vazio`,
    'any.required': `{{#label}} é um campo obrigatório`
  }),
  destino: Joi.string().required().messages({
    'string.empty': `{{#label}} não pode ser vazio`,
    'any.required': `{{#label}} é um campo obrigatório`
  }),
  plano: Joi.number().integer().required().messages({
    'number.base': `{{#label}} tem que ser numérico`,
    'any.required': `{{#label}} é um campo obrigatório`
  }),
  minutos_falados: Joi.number().integer().required().messages({
    'number.base': `{{#label}} tem que ser numérico`,
    'any.required': `{{#label}} é um campo obrigatório`
  }),

});

const calculo = async (req: Request, res: Response) => {

  const parametros = {
    origem: req.params.origem,
    destino: req.params.destino,
    plano: parseInt(req.params.plano),
    minutos_falados: parseInt(req.params.minutos_falados)
  }

  console.log('-> parametros')
  console.log(parametros)

  // Joy Validation  
  const { error,  } = calculoSchema.validate(parametros, options);

  if (error) { 

      res.status(422).json({
        success: false,
        msg: `Erro de validação..: ${error.details.map(x => x.message).join(', ')}`,
        parametros,
      }) 

  } else {

    const planoslRepository = connection!.getRepository(modelPlanos)

    const getPlano = {
      minutos: parametros.plano,
      status : true
    }
 
    planoslRepository.findOne(getPlano).then(plano => {
      
      console.log(plano)
      
      if (plano){

        const origemdestinoRepository = connection!.getRepository(modelOrigemdestino)

        const getOrigemdestino = {
          origem: parametros.origem,
          destino: parametros.destino,
          status : true
        }

        origemdestinoRepository.findOne(getOrigemdestino).then( origemdestino => {
          
         console.log(origemdestino)
          
          let custo_com_plano = 0
          let custo_sem_plano = 0
          let minutos_excedentes = 0 

          if (origemdestino){

            custo_sem_plano = (origemdestino.custo_minutos_sem_plano * parametros.minutos_falados)

            if ( parametros.minutos_falados > plano.minutos ) {
              minutos_excedentes = parametros.minutos_falados - plano.minutos
              custo_com_plano = (origemdestino.custo_minutos_com_plano * minutos_excedentes)     
              custo_com_plano = custo_com_plano + (( custo_com_plano * origemdestino.custo_excedente) / 100) 
            }

            console.log(plano)

            res.status(200).json({
              success: true,
              plano: plano.nome_plano + ' ' + plano.minutos.toString(),
              minutos_excedentes : minutos_excedentes,
              custo_com_plano : 'R$ ' + custo_com_plano.toString(),
              custo_sem_plano : 'R$ ' + custo_sem_plano.toString()                         
            })
          } else {
            res.status(400).json({
              success: false,
              msg: `Nenhuma informação de tarifa de origem ou destino encontrado`,
              parametros,
            })
          } 
        })

      } else {
        res.status(400).json({
          success: false,
          msg: `Nenhum plano encotrado`,
          parametros,
        });
      }  
    })
  }

}




export default { calculo }
