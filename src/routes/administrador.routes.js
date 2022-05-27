import { Router } from 'express'
import { methods as administradorController } from './../controllers/administrador.controller'
import { methods as authController } from '../controllers/auth/auth.controller'

//Modulo Router
const router = Router();

//Rutas
router.post('/singin', authController.authAdministrador);//VALIDATOR
router.post('/testToken', authController.verificarToken, authController.testToken);//TESTEANDO TOKEN LA FUNCION INTERMEDIARIA LA TENDRAS QUE PONER EN CADA VERBO DEL API REST -> VERIFICAR TOKEN ESTA COMO MIDLEWARE
//router.get('/', administradorController.selAdministrador);//SEL
/*router.get('/:id',);//GET
router.post('/',);//INS
router.put('/:id',);//UPD
router.delete('/:id',);//DEL*/

export default router;