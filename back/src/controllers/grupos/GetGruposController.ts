import { Request, Response } from 'express'
import { GetGruposService, GetTodosGruposService } from '../../services/grupos/GetGruposService'

class GetGruposController{
    async handle( req: Request, res: Response ){

        const {id} = req.params


        const getGruposService = new GetGruposService();

        const grupo = await getGruposService.execute({id})
        return res.json(grupo)

    }

   
}


class GetTodosGruposController{

    async handle( req: Request, res: Response ){
        const getTodosGruposService = new GetTodosGruposService();

        const gruposTodos = await getTodosGruposService.execute();

        return res.json(gruposTodos);
    }
}



export {GetGruposController, GetTodosGruposController}