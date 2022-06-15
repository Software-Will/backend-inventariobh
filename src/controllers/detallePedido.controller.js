import { getConnection } from './../database/database'

const selDetallePedido = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM detallepedido_view');
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const getDetallePedidoxPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT nombreInsumo, cantidadPedido FROM detallepedido_view WHERE idPedido = ?', id);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

/**
 * Para insertar un Detalle Pedido primero debes insertar un pedido ya que necesitamos el idPedido, el nombre del insumo si envialo normal, obtengo el id en el back
 * Example: Para hacer las prubeas fijate en la BD los idPedidos existentes, si no no funcionara, en el front enviar por push() y borras por pop()
 * [
    {
        "idPedido": 1,
        "nombreInsumo": "Hierro",
        "cantidadPedido": 1000
    },
    {
        "idPedido": 1,
        "nombreInsumo": "Níquel",
        "cantidadPedido": 1000
    },
    {
        "idPedido": 1,
        "nombreInsumo": "Cromo",
        "cantidadPedido": 1000
    }
]
 */
const insDetallePedido = async (req, res) => {
    try {
        const data = req.body;
        const idPedido = data[0].idPedido; //Dato unico para todos los detalles de un pedido
        const connection = await getConnection();
        const auxIdsInsumos = [];
        const auxCantPedido = [];
        for (let i = 0; i < data.length; i++) { //For para obtener los idsInsumos y obtener la cantidad de pedidos por detallePedido
            const auxId = await connection.query('SELECT idInsumo FROM insumos WHERE nombreInsumo = ?', data[i].nombreInsumo);
            auxIdsInsumos.push(auxId[0].idInsumo);
            const auxObtenerCantidadPedido = data[i].cantidadPedido;
            auxCantPedido.push(auxObtenerCantidadPedido);
            // console.log(`TODO ESTO SERA A INSERTADO...........`);
            // console.log(idPedido);
            // console.log(auxIdsInsumos);
            // console.log(auxCantPedido);
            const idInsumo = auxIdsInsumos[i];
            const cantidadPedido = auxCantPedido[i];
            const detallepedido = { idPedido, idInsumo, cantidadPedido };
            //console.log(detallepedido);
            const result = await connection.query('INSERT INTO detallepedido SET ?', detallepedido);
            res.json(result);
        }
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const methods = {
    selDetallePedido,
    getDetallePedidoxPedido,
    insDetallePedido
}