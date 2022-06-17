import { Router } from 'express'
import { methods as pedidoController } from './../controllers/pedido.controller'

const router = Router();

router.get('/', pedidoController.selPedido); // SEL
router.get('/:id', pedidoController.getPedido); // GET
router.post('/', pedidoController.insPedido);
router.put('/:id', pedidoController.updPedido);
router.delete('/:id', pedidoController.delPedido);

//!
router.post('/recibirPedido', pedidoController.recibirPedidoRegistrarEntrada); //Para cambiar el estado del pedido a 1 y para aumentar stock de insumos

export default router;