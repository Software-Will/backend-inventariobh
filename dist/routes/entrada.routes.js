"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _entrada = require("./../controllers/entrada.controller");

var router = (0, _express.Router)();
router.get('/', _entrada.methods.selEntradaview);
router.get('/getIdDetallePedido/:id', _entrada.methods.getIdDetallePedido);
router.get('/:id', _entrada.methods.getEntrada); // router.post();

var _default = router;
exports["default"] = _default;