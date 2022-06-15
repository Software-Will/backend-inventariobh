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
 *? Por defecto el idEstado que me enviaras es 2 :: Pendiente
 *? La fecha me lo envias desde el front con:
 *? const fecha = new Date().toISOString();
 * totalInsumo :: detalle++
 * costoPedido :: costoPedido += costoDetalle
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












export const methods = {
    selPedido,
    getPedido,
    insPedido
}