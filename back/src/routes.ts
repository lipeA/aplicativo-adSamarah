import { Router, Request, Response } from 'express' ;
// middleware
import AutentificaUserLogin from './middlewares/AutentificaUserLogin';
//user
import { CreateUserController } from './controllers/users/CreateUserController';
import { LoginUserController } from './controllers/login/LoginUserController';
import { UpdateUserController } from './controllers/users/UpdateUserController';

//grupo
import { CreateGruposController } from './controllers/grupos/CreateGruposController';
import { GetGruposController, GetTodosGruposController } from './controllers/grupos/GetGruposController';
import { UpdateGruposController } from './controllers/grupos/UpdateGruposController';
import { DeleteGruposController } from './controllers/grupos/deleteGruposController';

const router = Router();
//teste
router.get('/teste', ( req: Request, res: Response )=>{
    return res.json({ ok: true });
})



// Users
router.post('/criar-users', new CreateUserController().handle)
router.post('/login-user', new LoginUserController().handle )
router.put('/update-user/:id', new UpdateUserController().handle)

// grupo
router.post('/criar-grupos', new CreateGruposController().handle)
router.get('/busca-grupos/:id', new GetGruposController().handle)
router.get('/todos-grupos', new  GetTodosGruposController().handle)
router.put('/atualizar-grupos/:id', new UpdateGruposController().handle)
router.delete('/delete-grupos/:id', new DeleteGruposController().handle)










export {router}







