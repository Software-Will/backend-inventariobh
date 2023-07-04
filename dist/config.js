"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //Dispone las variables de entorno en .env

var _default = {
  host: process.env.HOST || '',
  database: process.env.DATABASE || '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '',
  port: process.env.DB_PORT || ''
};
exports["default"] = _default;