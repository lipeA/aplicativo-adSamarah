import {Request, Response} from 'express'
import { DeleteAlcancadaService } from '../../services/alcancadas/DeleteAlcancadasService';

class DeleteAlcancadaController{
    async handle( req: Request, res: Response ){

        const {id} = req.params
        
        const deleteAlcancadaService = new DeleteAlcancadaService();


      

        try {
            const pessoa = await deleteAlcancadaService.execute({id})
            return res.status(201).json(pessoa)
            
        } catch (error) {
            return res.status(400).json(error)
        }

    }
}

export {DeleteAlcancadaController}



