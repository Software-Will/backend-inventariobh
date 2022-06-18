import { Router } from 'express'
import { methods as entradaController } from './../controllers/entrada.controller'

const router = Router();

router.get('/', entradaController.selEntradaview);
router.get('/getIdDetallePedido/:id', entradaController.getIdDetallePedido);
router.get('/:id', entradaController.getEntrada);
// router.post();


export default router;