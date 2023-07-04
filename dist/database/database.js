"use strict";

var _promise = require("mysql2/promise");

var _config = _interopRequireDefault(require("./../config"));

var _colors = _interopRequireDefault(require("colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Conexion
var connection = (0, _promise.createPool)({
  user: _config["default"].user,
  password: _config["default"].password,
  host: _config["default"].host,
  port: _config["default"].port,
  database: _config["default"].database
}); //Variable Global -> Acceso a la bd

var getConnection = function getConnection() {
  return connection;
};

module.exports = {
  getConnection: getConnection
};