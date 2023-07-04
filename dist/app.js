"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _administrador = _interopRequireDefault(require("./routes/administrador.routes"));

var _proveedores = _interopRequireDefault(require("./routes/proveedores.routes"));

var _insumos = _interopRequireDefault(require("./routes/insumos.routes"));

var _categoria = _interopRequireDefault(require("./routes/categoria.routes"));

var _manufactura = _interopRequireDefault(require("./routes/manufactura.routes"));

var _pedido = _interopRequireDefault(require("./routes/pedido.routes"));

var _detallePedido = _interopRequireDefault(require("./routes/detallePedido.routes"));

var _entrada = _interopRequireDefault(require("./routes/entrada.routes"));

var _salida = _interopRequireDefault(require("./routes/salida.routes"));

var _detalleSalida = _interopRequireDefault(require("./routes/detalleSalida.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Settings

app.set('port', process.env.PORT || 5000); // Middlewares

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev')); // Routers

app.use('/api/administrador', _administrador["default"]);
app.use('/api/insumos', _insumos["default"]);
app.use('/api/categoria', _categoria["default"]);
app.use('/api/proveedores', _proveedores["default"]);
app.use('/api/manufactura', _manufactura["default"]); //!

app.use('/api/pedido', _pedido["default"]);
app.use('/api/detallePedido', _detallePedido["default"]);
app.use('/api/entrada', _entrada["default"]);
app.use('/api/salida', _salida["default"]);
app.use('/api/detalleSalida', _detalleSalida["default"]);
var _default = app;
exports["default"] = _default;