"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _administrador = require("./../controllers/administrador.controller");

var _auth = require("../controllers/auth/auth.controller");

//Modulo Router
var router = (0, _express.Router)(); //Rutas

router.post('/singin', _auth.methods.authAdministrador); //Generar jwt para login

router.post('/testToken', _auth.methods.verifyToken, _auth.methods.testToken); //Implemenacion jwt como Middleware en rutas -> testToken : Solo ClientAPI

router.get('/', _administrador.methods.selAdministrador); //SEL

router.get('/:id', _administrador.methods.getAdministrador); //GET

router.put('/:id', _administrador.methods.updAdministrador); //UPD

router.post('/cambioPassword', _administrador.methods.updPassword);
var _default = router;
exports["default"] = _default;