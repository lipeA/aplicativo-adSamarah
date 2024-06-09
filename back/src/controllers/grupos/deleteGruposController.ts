import {Request, Response} from 'express'
import { DeleteGruposService } from '../../services/grupos/DeleteGruposService'


class DeleteGruposController{
    async handle( req: Request, res: Response ){

        const {id} = req.body
        
        const deleteGruposService = new DeleteGruposService();


      

        try {
            const GrupoDel = await deleteGruposService.execute({id})
            return res.status(201).json(GrupoDel)
            
        } catch (error) {
            return res.status(400).json(error)
        }

    }
}

export {DeleteGruposController}







