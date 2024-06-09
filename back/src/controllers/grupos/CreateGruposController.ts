
import {Request, Response,json} from 'express'
import { CreateGruposService } from '../../services/grupos/CreateGruposService';



class CreateGruposController{
    
    async handle(req: Request, res: Response){

        const {nome, descricao} = req.body;
        
        //console.log(nome)

        const createGruposService = new CreateGruposService();

        const grupo = await createGruposService.execute( {nome, descricao} )

        return res.json(grupo);

    }
}


export {CreateGruposController}