"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proveedores = require("./../controllers/proveedores.controller");

//Modulo Router
var router = (0, _express.Router)(); //Rutas

router.get('/', _proveedores.methods.selProveedores); //SEL

router.get('/:id', _proveedores.methods.getProveedores); //GET

router.post('/', _proveedores.methods.insProveedores); //INS

router.put('/:id', _proveedores.methods.updProveedores); //UPD

router["delete"]('/:id', _proveedores.methods.delProveedores); //DEL

var _default = router;
exports["default"] = _default;