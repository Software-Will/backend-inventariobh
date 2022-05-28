import { Router } from 'express'
import { methods as administradorController } from './../controllers/administrador.controller'
import { methods as authController } from '../controllers/auth/auth.controller'

//Modulo Router
const router = Router();

//Rutas
router.post('/singin', authController.authAdministrador); //Generar jwt para login
router.post('/testToken', authController.verifyToken, authController.testToken);//Implemenacion jwt como Middleware en rutas -> testToken : Solo ClientAPI
//router.get('/', administradorController.selAdministrador);//SEL
/*router.get('/:id',);//GET
router.post('/',);//INS
router.put('/:id',);//UPD
router.delete('/:id',);//DEL*/

export default router;