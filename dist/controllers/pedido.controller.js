"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;

var _database = require("./../database/database");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// SEL
var selPedido = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var connection, _yield$Promise$all, _yield$Promise$all2, result, idProveedorAux, i;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return Promise.all([connection.query('SELECT * FROM pedido_view'), connection.query('SELECT idProveedor FROM pedido')]);

          case 6:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            result = _yield$Promise$all2[0];
            idProveedorAux = _yield$Promise$all2[1];

            for (i = 0; i < result.length; i++) {
              result[i].idProveedor = idProveedorAux[i].idProveedor; // Insert Propiedad 
            }

            res.json(result[0]);
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function selPedido(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET


var getPedido = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, connection, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context2.sent;
            _context2.next = 7;
            return connection.query('SELECT * FROM pedido_view WHERE idPedido = ?', id);

          case 7:
            result = _context2.sent;
            res.json(result[0]);
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function getPedido(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // INS

/**
 * Enviaras el nombre del proveedor y administrador al back
 * totalInsumo :: detalle++
 * costoPedido :: costoPedido += costoDetalle
 * 
 * 
 * {
        "proveedor": "Materias Primas y Quimicos MG",
        "administrador": "William Chávez",
        "descripcion": "...",
        "totalInsumos": 17,
        "costoPedido": 5000
}
 * 
 * 
 * 
 * 
 */


var insPedido = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data, idEstado, connection, auxIdProveedor, idProveedor, auxIdAdministrador, idAdmin, fecha, descripcion, totalInsumos, costoPedido, auxVal, pedido, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            data = req.body;
            idEstado = 2;
            _context3.next = 5;
            return (0, _database.getConnection)();

          case 5:
            connection = _context3.sent;
            _context3.next = 8;
            return connection.query('SELECT idProveedor FROM proveedores WHERE nombreProveedor = ?', data.proveedor);

          case 8:
            auxIdProveedor = _context3.sent;
            // console.log(auxIdProveedor[0][0].idProveedor);
            idProveedor = auxIdProveedor[0][0].idProveedor;
            _context3.next = 12;
            return connection.query('SELECT idAdmin FROM administrador WHERE nombreAdmin = ?', data.administrador);

          case 12:
            auxIdAdministrador = _context3.sent;
            idAdmin = auxIdAdministrador[0][0].idAdmin;
            _context3.next = 16;
            return connection.query('SELECT NOW()');

          case 16:
            fecha = _context3.sent;
            // Fecha para el pedido
            // console.log(fecha[0][0]['NOW()']);
            descripcion = data.descripcion, totalInsumos = data.totalInsumos, costoPedido = data.costoPedido;
            auxVal = [idProveedor, idAdmin, idEstado, fecha, descripcion, totalInsumos, costoPedido];
            if (auxVal.includes(undefined)) res.status(400).json({
              message: "Verifique los campos para registrar un pedido"
            });
            pedido = {
              idProveedor: idProveedor,
              idAdmin: idAdmin,
              idEstado: idEstado,
              fecha: fecha[0][0]['NOW()'],
              descripcion: descripcion,
              totalInsumos: totalInsumos,
              costoPedido: costoPedido
            };
            console.log(pedido);
            _context3.next = 24;
            return connection.query('INSERT INTO pedido SET ?', pedido);

          case 24:
            result = _context3.sent;
            res.json(result);
            _context3.next = 32;
            break;

          case 28:
            _context3.prev = 28;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 32:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 28]]);
  }));

  return function insPedido(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Upd Pedido -> Proveedor :: envia el nombre no id - Descripcion
 */


var updPedido = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body, proveedor, descripcion, connection, auxIdPedido, idProveedor, pedido, result;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _req$body = req.body, proveedor = _req$body.proveedor, descripcion = _req$body.descripcion; // console.log(proveedor);

            console.log(proveedor);
            _context4.next = 6;
            return (0, _database.getConnection)();

          case 6:
            connection = _context4.sent;
            _context4.next = 9;
            return connection.query("SELECT idProveedor FROM proveedores WHERE nombreProveedor = '".concat(proveedor, "'"));

          case 9:
            auxIdPedido = _context4.sent;
            // console.log(auxIdPedido);
            idProveedor = auxIdPedido[0][0].idProveedor;
            console.log(idProveedor);
            pedido = {
              idProveedor: idProveedor,
              descripcion: descripcion
            };
            _context4.next = 15;
            return connection.query('UPDATE pedido SET ? WHERE idPedido = ?', [pedido, id]);

          case 15:
            result = _context4.sent;
            res.json(result);
            _context4.next = 23;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 19]]);
  }));

  return function updPedido(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Del Pedido -> Se elimna el pedido y todos sus detalles pedidos
 * Relacion CASCADE delete :: update
 * ! Un pedido no podra ser eliminado si ya esta con el estado de atendido
 */


var delPedido = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, connection, estado, idEstado, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return (0, _database.getConnection)();

          case 4:
            connection = _context5.sent;
            _context5.next = 7;
            return connection.query('SELECT idEstado FROM pedido WHERE idPedido = ?', id);

          case 7:
            estado = _context5.sent;
            idEstado = estado[0].idEstado;

            if (!(idEstado === 1)) {
              _context5.next = 11;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              message: 'No puede eliminar este pedido'
            }));

          case 11:
            _context5.next = 13;
            return connection.query('DELETE FROM pedido WHERE idPedido = ?', id);

          case 13:
            result = _context5.sent;
            res.json(result);
            _context5.next = 21;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 21:
            ;

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 17]]);
  }));

  return function delPedido(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Registrar Entrada
 * Evaluamos el id del pedido a registrar como entrada
 * Debemos conocer los insumos registrados en los detalles del pedido
 * Verificamos los datos del back y aumentamos, para ello obtener lo existente
 * ! Todos los pedidos pueden tener el estado de pendiente y recibido :: id -> 2 | 1
 * ! Una vez cambiado el estado de un pedido de pendiente a recibido no se podra volver atras
 */


var recibirPedidoRegistrarEntrada = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var idPedido, idEstado, connection, fecha, auxPedido, _auxPedido$, idAdmin, idProveedor, auxVal, entrada, pedido, detallePedido, i, idInsumo, stockActualInsumo, stockActual, stockAumentar, stockResultante, stock, insumos;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            idPedido = req.body.idPedido;
            idEstado = 1; // Recibido

            _context6.next = 5;
            return (0, _database.getConnection)();

          case 5:
            connection = _context6.sent;
            _context6.next = 8;
            return connection.query('SELECT NOW()');

          case 8:
            fecha = _context6.sent;
            _context6.next = 11;
            return connection.query('SELECT idAdmin, idProveedor FROM pedido WHERE idPedido = ?', idPedido);

          case 11:
            auxPedido = _context6.sent;
            // Para obtener datos para la entrada
            _auxPedido$ = auxPedido[0], idAdmin = _auxPedido$.idAdmin, idProveedor = _auxPedido$.idProveedor;
            auxVal = [fecha, idAdmin, idProveedor, idPedido, idEstado];
            if (auxVal.includes(undefined)) res.status(400).json({
              message: "Verifique los campos para actualizar el estado del pedido y registrar la entrada"
            });
            entrada = {
              fecha: fecha[0]['NOW()'],
              idAdmin: idAdmin,
              idProveedor: idProveedor,
              idPedido: idPedido
            };
            pedido = {
              idEstado: idEstado
            };
            _context6.next = 19;
            return connection.query('UPDATE pedido SET ? WHERE idPedido = ?', [pedido, idPedido]);

          case 19:
            _context6.next = 21;
            return connection.query('INSERT INTO entrada SET ?', entrada);

          case 21:
            _context6.next = 23;
            return connection.query('SELECT idInsumo, cantidadPedido FROM detallepedido WHERE idPedido = ?', idPedido);

          case 23:
            detallePedido = _context6.sent;
            i = 0;

          case 25:
            if (!(i < detallePedido.length)) {
              _context6.next = 47;
              break;
            }

            // Trabajo para insumos
            idInsumo = detallePedido[i].idInsumo;
            _context6.next = 29;
            return connection.query('SELECT nombreInsumo, stock FROM insumos WHERE idInsumo = ?', idInsumo);

          case 29:
            stockActualInsumo = _context6.sent;
            stockActual = stockActualInsumo[0].stock;
            stockAumentar = detallePedido[i].cantidadPedido; // La cantidad del pedido para aumentar el stock del insumo una vez recibido

            stockResultante = stockActual + stockAumentar;
            stock = stockResultante; // Propiedad del objeto insumos

            if (!stock || stock === undefined || stock <= 0) res.status(400).json({
              message: "Error en los calculos de aumentar stock"
            });
            insumos = {
              stock: stock
            };
            _context6.next = 38;
            return connection.query('UPDATE insumos SET ? WHERE idInsumo = ?', [insumos, idInsumo]);

          case 38:
            // Actualizamos el stock de los insumos
            // Datos Actualizados
            console.log("idInsumo: ".concat(detallePedido[i].idInsumo));
            console.log("Nombre Insumo: ".concat(stockActualInsumo[0].nombreInsumo).red);
            console.log("Stock Actual: ".concat(stockActual));
            console.log("Stock a aumentar: ".concat(stockAumentar));
            console.log("Stock Resultante: ".concat(stockResultante));
            console.log();

          case 44:
            i++;
            _context6.next = 25;
            break;

          case 47:
            res.json('Pedido Recibido - Stock Actualizado');
            _context6.next = 54;
            break;

          case 50:
            _context6.prev = 50;
            _context6.t0 = _context6["catch"](0);
            res.status(500);
            res.send(_context6.t0.message);

          case 54:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 50]]);
  }));

  return function recibirPedidoRegistrarEntrada(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

var methods = {
  selPedido: selPedido,
  getPedido: getPedido,
  insPedido: insPedido,
  updPedido: updPedido,
  delPedido: delPedido,
  recibirPedidoRegistrarEntrada: recibirPedidoRegistrarEntrada
};
exports.methods = methods;