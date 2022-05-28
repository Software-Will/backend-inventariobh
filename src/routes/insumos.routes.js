import { Router } from 'express'
import { methods as insumosController } from './../controllers/insumos.controller'

const router = Router();

router.get('/viewInsumos', insumosController.viewInsumos); //VIEW -> Client Angular
router.get('/', insumosController.selInsumos); //SEL -> Client API 
router.get('/:id', insumosController.getInsumos); //GET
router.post('/', insumosController.insInsumos); //INS
router.put('/:id', insumosController.updInsumos); //UPD
router.delete('/:id', insumosController.delInsumos); //DEL

export default router;