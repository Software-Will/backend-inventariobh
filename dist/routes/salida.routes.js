"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _salida = require("./../controllers/salida.controller");

var router = (0, _express.Router)(); // Rutas

router.get('/', _salida.methods.selSalida);
router.get('/:id', _salida.methods.getSalida);
router.post('/', _salida.methods.insSalida);
router.put('/:id', _salida.methods.updSalida);
router["delete"]('/:id', _salida.methods.delSalida);
var _default = router;
exports["default"] = _default;