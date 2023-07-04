"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detallePedido = require("./../controllers/detallePedido.controller");

var router = (0, _express.Router)();
router.get('/', _detallePedido.methods.selDetallePedido); // SEL

router.get('/:id', _detallePedido.methods.getDetallePedidoxPedido); // GET -> Para ver los insumos x pedido

router.post('/', _detallePedido.methods.insDetallePedido); // INS -> Envias un arreglo con objetos

var _default = router;
exports["default"] = _default;