import {Request, Response,json} from 'express'
import { CreateAlcancadaService } from '../../services/alcancadas/CreateAlcancadaServe';


class CreateAlcancadaController{
    
    async handle(req: Request, res: Response){

        const {nome, descricao, grupo } = req.body;
        
        //console.log(nome)

        const createAlcancadaService = new CreateAlcancadaService();

        const pessoa = await createAlcancadaService.execute( {nome, descricao, grupo} )

        return res.json(pessoa);

    }
}


export {CreateAlcancadaController}