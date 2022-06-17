import { Router } from 'express'
import { methods as entradaController } from './../controllers/entrada.controller'

const router = Router();

router.get('/', entradaController.selEntrada);
router.get('/:id', entradaController.getEntrada);
// router.post();


export default router;