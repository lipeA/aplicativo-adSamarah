import { Request, Response, json} from 'express';
import { UpdateUserService } from '../../services/users/UpdateUserService';

class UpdateUserController{

    async handle( req: Request, res: Response ){

        const{ id }= req.params
        const { nome, password, grupo_id } = req.body


        console.log(password)

        const updateUserService = new UpdateUserService();
        const updateUser = await updateUserService.execute({id, nome, password, grupo_id});
        return res.status(200).json(updateUser)
       
    }


}

export {UpdateUserController}




