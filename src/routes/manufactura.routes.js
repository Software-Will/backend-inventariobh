import { Router } from 'express'
import { methods as manufacturaController } from './../controllers/manufactura.controller'

//Modulo
const router = Router();

//Rutas
router.get('/', manufacturaController.selManufactura); // SEL
router.get('/:id', manufacturaController.getManufactura); // GET
router.post('/', manufacturaController.insManufactura); // INS
router.put('/:id', manufacturaController.updManufactura); // UPD
router.delete('/:id', manufacturaController.delManufactura);

export default router;