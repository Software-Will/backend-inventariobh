import { getConnection } from './../database/database'

// SEL
const selPedido = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM pedido_view');
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

// GET
const getPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM pedido_view WHERE idPedido = ?', id);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

// INS
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
const insPedido = async (req, res) => {
    try {
        const data = req.body;
        const idEstado = 2;
        const connection = await getConnection();
        const auxIdProveedor = await connection.query('SELECT idProveedor FROM proveedores WHERE nombreProveedor = ?', data.proveedor);
        const idProveedor = auxIdProveedor[0].idProveedor;
        const auxIdAdministrador = await connection.query('SELECT idAdmin FROM administrador WHERE nombreAdmin = ?', data.administrador);
        const idAdmin = auxIdAdministrador[0].idAdmin;
        const fecha = new Date().toISOString();
        const { descripcion, totalInsumos, costoPedido } = data;
        const auxVal = [idProveedor, idAdmin, idEstado, fecha, descripcion, totalInsumos, costoPedido];
        if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para registrar un pedido" });
        const pedido = { idProveedor, idAdmin, idEstado, fecha, descripcion, totalInsumos, costoPedido };
        //console.log(pedido);
        const result = await connection.query('INSERT INTO pedido SET ?', pedido);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}


/**
 * Upd Pedido -> Proveedor :: envia el nombre no id - Descripcion
 */
const updPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { proveedor, descripcion } = req.body;
        const connection = await getConnection();
        const auxIdPedido = await connection.query('SELECT idProveedor FROM proveedores WHERE nombreProveedor = ?', proveedor);
        const idProveedor = auxIdPedido[0].idProveedor;
        const pedido = { idProveedor, descripcion };
        const result = await connection.query('UPDATE pedido SET ? WHERE idPedido = ?', [pedido, id]);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}


/**
 * Del Pedido -> Se elimna el pedido y todos sus detalles pedidos
 * Relacion CASCADE delete :: update
 */
const delPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM pedido WHERE idPedido = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
}

export const methods = {
    selPedido,
    getPedido,
    insPedido,
    updPedido,
    delPedido
}