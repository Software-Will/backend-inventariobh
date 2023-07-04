"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalleSalida = require("./../controllers/detalleSalida.controller");

var router = (0, _express.Router)();
router.get('/', _detalleSalida.methods.selDetalleSalida);
router.get('/:id', _detalleSalida.methods.getDetalleSalida);
router.post('/', _detalleSalida.methods.insDetalleSalida);
var _default = router;
exports["default"] = _default;