"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _manufactura = require("./../controllers/manufactura.controller");

//Modulo
var router = (0, _express.Router)(); //Rutas

router.get('/', _manufactura.methods.selManufactura); // SEL

router.get('/:id', _manufactura.methods.getManufactura); // GET

router.post('/', _manufactura.methods.insManufactura); // INS

router.put('/:id', _manufactura.methods.updManufactura); // UPD

router["delete"]('/:id', _manufactura.methods.delManufactura);
var _default = router;
exports["default"] = _default;