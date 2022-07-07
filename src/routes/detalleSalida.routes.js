import { Router } from 'express'

import { methods as detalleSalidaController } from './../controllers/detalleSalida.controller'

const router = Router();

router.get('/', detalleSalidaController.selDetalleSalida);
router.get('/:id', detalleSalidaController.getDetalleSalida);
router.post('/', detalleSalidaController.insDetalleSalida);

export default router;