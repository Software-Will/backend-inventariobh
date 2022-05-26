import { Router } from 'express'
import { methods as administradorController } from './../controllers/administrador.controller'

//Modulo Router
const router = Router();

//Rutas
router.post('/singin', administradorController.validacionAdministrador);//VALIDATOR
router.get('/', administradorController.selAdministrador);//SEL
/*router.get('/:id',);//GET
router.post('/',);//INS
router.put('/:id',);//UPD
router.delete('/:id',);//DEL*/

export default router;