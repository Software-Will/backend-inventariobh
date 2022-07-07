import { Router } from 'express'
import { methods as salidaController } from './../controllers/salida.controller'

const router = Router();

// Rutas
router.get('/', salidaController.selSalida);
router.get('/:id', salidaController.getSalida);
router.post('/', salidaController.insSalida);
router.put('/:id', salidaController.updSalida);
router.delete('/:id', salidaController.delSalida);

export default router;