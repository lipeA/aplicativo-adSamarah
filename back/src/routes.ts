import { Router, Request, Response } from 'express' ;

import { CreateUserController } from './controllers/users/CreateUserController';

const router = Router();


router.get('/teste', ( req: Request, res: Response )=>{
    return res.json({ ok: true });
})

// Users

router.post('/criar-users', new CreateUserController().handle)





export {router}







