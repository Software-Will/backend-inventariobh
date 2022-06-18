import { getConnection } from './../database/database'


/**
 * La Entrada solo funcionara como sel del entrada_view 
 */
const selEntradaview = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM entrada_view');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

/**
 * Este metodo es para obtener el idPedido para poder ver los detalles del pedido que entraron
 */
const getIdDetallePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT idPedido FROM entrada where idEntrada = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const getEntrada = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM entrada_view WHERE idEntrada = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

export const methods = {
    selEntradaview,
    getIdDetallePedido,
    getEntrada
}