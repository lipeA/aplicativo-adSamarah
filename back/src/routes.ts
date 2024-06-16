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

//visita
import { getVisitasController, getTodasVisitasController } from './controllers/visitas/getVisitasController';
import { CreateVisitaController } from './controllers/visitas/CreateVisitaController';





const router = Router();
//teste
router.get('/teste', ( req: Request, res: Response )=>{
    return res.json({ ok: true });
})



// Users
router.post('/criar-users', new CreateUserController().handle)
router.post('/login-user', new LoginUserController().handle )
router.put('/atualizar-user/:id', new UpdateUserController().handle)

// grupo
router.post('/criar-grupo', new CreateGruposController().handle)
router.get('/todos-grupos', new  GetTodosGruposController().handle)
router.get('/busca-grupo/:id', new GetGruposController().handle)
router.put('/atualizar-grupo/:id', new UpdateGruposController().handle)
router.delete('/delete-grupo/:id', new DeleteGruposController().handle)

//visita
router.post('/criar-visita', new CreateVisitaController().handle)
router.get('/buscar-visitas', new getTodasVisitasController().handle)
router.get('/buscar-visitas/:id', new getVisitasController().handle)
router.put('/atualizar-visita/:id')










export {router}







