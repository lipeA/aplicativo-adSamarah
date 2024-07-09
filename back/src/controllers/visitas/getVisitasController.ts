import { Request, Response, json } from 'express';

import { getTodasVisitasService, getVisitasService } from '../../services/visitas/getVisitasService'



class getTodasVisitasController{
    async handle(req: Request, res: Response){

        const gettodasVisitasService = new getTodasVisitasService();

        const todasVisitas = await gettodasVisitasService.execute();

        return res.json(todasVisitas)

    }

}



class getVisitasController{

    async handle(req: Request, res: Response){

        const {id} = req.params

        const getvisitasService = new getVisitasService();

        const visita = await getvisitasService.execute({id})


        return res.json(visita)

    }

}



export {getTodasVisitasController, getVisitasController}