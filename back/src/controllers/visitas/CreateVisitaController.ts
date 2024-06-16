import { Request, Response} from 'express'
import { CreateVisitaService } from '../../services/visitas/CreateVisitaService'


class CreateVisitaController{
    async handle(req: Request, res: Response){

        const {nome, data, descricao, grupo} = req.body

        const createVisitaService = new CreateVisitaService();

        const visita = await createVisitaService.execute({nome, data, descricao, grupo})

        return res.json(visita);

    }
}


export { CreateVisitaController}