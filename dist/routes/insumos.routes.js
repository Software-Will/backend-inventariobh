"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _insumos = require("./../controllers/insumos.controller");

var router = (0, _express.Router)();
router.get('/viewInsumos', _insumos.methods.viewInsumos); //VIEW -> Client Angular

router.get('/', _insumos.methods.selInsumos); //SEL -> Client API 

router.get('/:id', _insumos.methods.getInsumos); //GET

router.post('/', _insumos.methods.insInsumos); //INS

router.put('/:id', _insumos.methods.updInsumos); //UPD

router["delete"]('/:id', _insumos.methods.delInsumos); //DEL

var _default = router;
exports["default"] = _default;