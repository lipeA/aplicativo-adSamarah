import { Request, Response } from 'express'
import { LoginUserService } from '../../services/login/LoginUserService'

class LoginUserController{
    async handle(req: Request, res: Response){

        const {nome, password} = req.body

        const loginUserService = new LoginUserService();

        const login = await loginUserService.execute({ nome, password })

        return res.json(login)

    }
}

export { LoginUserController }