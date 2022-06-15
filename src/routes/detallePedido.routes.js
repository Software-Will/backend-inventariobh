import { Router } from 'express'
import { methods as detallePedidoController } from './../controllers/detallePedido.controller'

const router = Router();

router.get('/', detallePedidoController.selDetallePedido); // SEL
router.get('/:id', detallePedidoController.getDetallePedidoxPedido); // GET -> Para ver los insumos x pedido
router.post('/', detallePedidoController.insDetallePedido); // INS -> Envias un arreglo con objetos


export default router;