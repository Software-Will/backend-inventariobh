import { getConnection } from './../database/database'

const selDetallePedido = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM detallepedido_view');
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

/**
 * Envias el id del pedido no del detallePedido
 */
const getDetallePedidoxPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM detallepedido_view WHERE idPedido = ?', id);
        res.json(result[0]);
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
        "nombreInsumo": "Hierro",
        "cantidadPedido": 1000
    },
    {
        "nombreInsumo": "Níquel",
        "cantidadPedido": 1000
    },
    {
        "nombreInsumo": "Cromo",
        "cantidadPedido": 1000
    }
]
 */
const insDetallePedido = async (req, res) => {
    try {
        const data = req.body;
        const auxIdsInsumos = [];
        const auxCantPedido = [];
        const connection = await getConnection();
        const auxIdPedido = await connection.query('SELECT idPedido FROM pedido ORDER by idPedido DESC LIMIT 1'); //Dato unico para todos los detalles de un pedido
        const idPedido = auxIdPedido[0].idPedido;
        //console.log(idPedido);
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
            const auxVal = [idPedido, idInsumo, cantidadPedido];
            if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para registrar detalles del pedido" });
            const detallepedido = { idPedido, idInsumo, cantidadPedido };
            //console.log(detallepedido);
            await connection.query('INSERT INTO detallepedido SET ?', detallepedido); //Insert data object
        }
        res.json('Detalles del pedido insertados :)');
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