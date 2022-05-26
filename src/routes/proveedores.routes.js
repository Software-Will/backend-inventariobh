import { Router } from 'express'
import { methods as proveedoresController } from './../controllers/proveedores.controller'

//Modulo Router
const router = Router();

//Rutas
router.get('/', proveedoresController.selProveedores);//SEL
router.get('/:id', proveedoresController.getProveedores);//GET
router.post('/', proveedoresController.insProveedores);//INS
router.put('/:id', proveedoresController.updProveedores);//UPD
router.delete('/:id', proveedoresController.delProveedores);//DEL

export default router;
