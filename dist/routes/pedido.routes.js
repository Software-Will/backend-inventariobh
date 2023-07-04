"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pedido = require("./../controllers/pedido.controller");

var router = (0, _express.Router)();
router.get('/', _pedido.methods.selPedido); // SEL

router.get('/:id', _pedido.methods.getPedido); // GET

router.post('/', _pedido.methods.insPedido);
router.put('/:id', _pedido.methods.updPedido);
router["delete"]('/:id', _pedido.methods.delPedido); //!

router.post('/recibirPedido', _pedido.methods.recibirPedidoRegistrarEntrada); //Para cambiar el estado del pedido a 1 y para aumentar stock de insumos

var _default = router;
exports["default"] = _default;