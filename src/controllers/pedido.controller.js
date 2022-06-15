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

}












export const methods = {
    selPedido
}