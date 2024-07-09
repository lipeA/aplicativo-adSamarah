import {Request, Response} from 'express'
import { DeleteVisitaService } from '../../services/visitas/DeleteVisitaService';



class DeleteVisitaController{
    async handle( req: Request, res: Response ){

        const {id} = req.params
        
        const deleteVisitaService = new DeleteVisitaService();


      

        try {
            const DelVisita = await deleteVisitaService.execute({id})
            return res.status(201).json(DelVisita)
            
        } catch (error) {
            return res.status(400).json(error)
        }

    }
}

export {DeleteVisitaController}







