import { Request, Response } from 'express'
import { UpdateGruposService } from '../../services/grupos/UpdateGruposService'


class UpdateGruposController{
    async handle(req: Request, res: Response){

        const { id, nome, descricao } = req.body


        const updateGruposService = new UpdateGruposService()


        

        try {
            const dataGrupo = await updateGruposService.execute({id, nome, descricao})
            return res.status(200).json(dataGrupo)
            
        }  catch(error) {
            return res.status(400).json({ error });
        }

       




    } 
}

export {UpdateGruposController}