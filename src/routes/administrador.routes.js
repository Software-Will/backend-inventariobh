import { Router } from 'express'
import { methods as administradorController } from './../controllers/administrador.controller'
import { methods as authController } from '../controllers/auth/auth.controller'

//Modulo Router
const router = Router();

//Rutas
router.post('/singin', authController.authAdministrador); //Generar jwt para login
router.post('/testToken', authController.verifyToken, authController.testToken);//Implemenacion jwt como Middleware en rutas -> testToken : Solo ClientAPI
router.get('/', administradorController.selAdministrador);//SEL
router.get('/:id', administradorController.getAdministrador);//GET
router.put('/:id', administradorController.updAdministrador);//UPD
router.post('/cambioPassword', administradorController.updPassword);

export default router;