import { Request, Response } from 'express';

import { connection } from '../server/database_sqlite_conf'

import modelOrigemdestino from '../models/sqlite/origemdestino'

const all = async (_req: Request, res: Response) => {
    
    const modelRepository = connection!.getRepository(modelOrigemdestino);

    modelRepository.find().then((result: any[]) => {
        /* #swagger.responses[200] = {                 
          success: true, 
          users: {
            "id": "",
            "username": "",
            "email": "",
            "date": ""
          }       
        } */

        res.json({
            success: true,
            result
        })

    }).catch(
        /* #swagger.responses[401] = {                 
        success: false
        } */

        () => res.json({ success: false })

    )

}




export default { all }
