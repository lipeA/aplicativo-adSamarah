import { Request, Response } from 'express'
import { GetAlcancadasService, GetTodosAlcancadasService } from '../../services/alcancadas/getAlcancadaService';

class GetAlcancadasController{
    async handle( req: Request, res: Response ){

        const {id} = req.params


        const getAlcancadasService = new GetAlcancadasService();

        const grupo = await getAlcancadasService.execute({id})
        return res.json(grupo)

    }

   
}


class GetTodosAlcancadasController{

    async handle( req: Request, res: Response ){
        const getTodosAlcancadasService = new GetTodosAlcancadasService();

        const AlcancadasTodos = await getTodosAlcancadasService.execute();

        return res.json(AlcancadasTodos);
    }
}



export {GetAlcancadasController, GetTodosAlcancadasController}