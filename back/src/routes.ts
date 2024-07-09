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
import { DeleteVisitaController } from './controllers/visitas/DeleteVisitaController';
import { UpdateVisitaController } from './controllers/visitas/UpdateVisitaController';

//Alcançadas
import { CreateAlcancadaController } from './controllers/alcancadas/CreateAlcancadaController';
import { GetAlcancadasController, GetTodosAlcancadasController } from './controllers/alcancadas/getAlcancadasController';
import { DeleteAlcancadaController } from './controllers/alcancadas/DeleteAlcancadasController';

const router = Router();
//teste
router.get('/teste', ( req: Request, res: Response )=>{
    return res.json({ ok: true });
})



// Users
router.post('/criar-users', new CreateUserController().handle)
router.post('/login-user', new LoginUserController().handle )
router.put('/editar-user/:id', new UpdateUserController().handle)

// grupo
router.post('/criar-grupo', new CreateGruposController().handle)
router.get('/todos-grupos', new  GetTodosGruposController().handle)
router.get('/busca-grupo/:id', new GetGruposController().handle)
router.put('/editar-grupo/:id', new UpdateGruposController().handle)
router.delete('/delete-grupo/:id', new DeleteGruposController().handle)

//visita
router.post('/criar-visita', new CreateVisitaController().handle)
router.get('/todos-visitas', new getTodasVisitasController().handle)
router.get('/buscar-visitas/:id', new getVisitasController().handle)
router.put('/editar-visita/:id', new UpdateVisitaController().handle)
router.delete('/delete-visita/:id', new DeleteVisitaController().handle)

//alcançadas
router.post('/criar-alcancada', new CreateAlcancadaController().handle )
router.get('/todos-alcancadas/', new GetTodosAlcancadasController().handle )
router.get('/buscar-alcancadas/:id', new GetAlcancadasController().handle )
router.delete('/delete-alcancada/:id', new DeleteAlcancadaController().handle)






export {router}







