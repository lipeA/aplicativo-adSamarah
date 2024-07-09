import { Request, Response } from 'express'
import { UpdateVisitaService } from '../../services/visitas/UpdateVisitaService'


class UpdateVisitaController{
    async handle(req: Request, res: Response){

        const {id} = req.params
        const { nome, data, descricao, grupo } = req.body


        const updateVisitaService = new UpdateVisitaService()


        

        try {
            const editarVisita = await updateVisitaService.execute({id, nome, data, descricao, grupo})
            return res.status(200).json(editarVisita)
            
        }  catch(error) {
            return res.status(400).json({ error });
        }

       




    } 
}

export {UpdateVisitaController}