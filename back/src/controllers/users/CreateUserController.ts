import {Request, Response,} from 'express'

import { CreateUserService } from '../../services/users/CreateUserService';

class CreateUserController{
    
    async handle(req: Request, res: Response){

        const {nome, password, grupo_id} =req.body

        console.log(nome, password, grupo_id )

        const createUserService = new CreateUserService();


        try{
         const user = await createUserService.execute({nome, password, grupo_id})
         return res.status(200).json(user);
       
        }catch (error) {
            return res.status(400).json( { error: error } );
        }

    }
}


export { CreateUserController}