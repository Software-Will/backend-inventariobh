"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _categoria = require("./../controllers/categoria.controller");

var router = (0, _express.Router)(); //Routes

router.get('/', _categoria.methods.selCategoria); //SEL

router.get('/:id', _categoria.methods.getCategoria); //GET return data por id

router.get('/nomCat/:nombreCat', _categoria.methods.getIdByNomCat); //return id por nomCategoria -> Metalico (1) | No Metalico (2)

var _default = router;
exports["default"] = _default;