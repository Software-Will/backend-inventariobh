import { getConnection } from './../database/database'

// SEL
const selPedido = async (req, res) => {
    try {
        const connection = await getConnection();
        // const result = await connection.query('SELECT * FROM pedido_view');
        // const idProveedorAux = await connection.query('SELECT idProveedor FROM pedido');
        const [result, idProveedorAux] = await Promise.all([
            connection.query('SELECT * FROM pedido_view'),
            connection.query('SELECT idProveedor FROM pedido')
        ]);
        for (let i = 0; i < result.length; i++) {
            result[i].idProveedor = idProveedorAux[i].idProveedor; // Insert Propiedad 
        }
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
        const fecha = await connection.query('SELECT NOW()'); // Fecha para el pedido
        const { descripcion, totalInsumos, costoPedido } = data;
        const auxVal = [idProveedor, idAdmin, idEstado, fecha, descripcion, totalInsumos, costoPedido];
        if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para registrar un pedido" });
        const pedido = { idProveedor, idAdmin, idEstado, fecha: fecha[0]['NOW()'], descripcion, totalInsumos, costoPedido };
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
 * ! Un pedido no podra ser eliminado si ya esta con el estado de atendido
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


/**
 * Registrar Entrada
 * Evaluamos el id del pedido a registrar como entrada
 * Debemos conocer los insumos registrados en los detalles del pedido
 * Verificamos los datos del back y aumentamos, para ello obtener lo existente
 * ! Todos los pedidos pueden tener el estado de pendiente y recibido :: id -> 2 | 1
 * ! Una vez cambiado el estado de un pedido de pendiente a recibido no se podra volver atras
 */
const recibirPedidoRegistrarEntrada = async (req, res) => {
    try {
        const { idPedido } = req.body;
        const idEstado = 1; // Recibido
        const fecha = await connection.query('SELECT NOW()'); // Fecha para la entrada
        const connection = await getConnection();
        const auxPedido = await connection.query('SELECT idAdmin, idProveedor FROM pedido WHERE idPedido = ?', idPedido); // Para obtener datos para la entrada
        const { idAdmin, idProveedor } = auxPedido[0];
        const auxVal = [fecha, idAdmin, idProveedor, idPedido, idEstado];
        if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para actualizar el estado del pedido y registrar la entrada" });
        const entrada = { fecha: fecha[0]['NOW()'], idAdmin, idProveedor, idPedido };
        const pedido = { idEstado };
        await connection.query('UPDATE pedido SET ? WHERE idPedido = ?', [pedido, idPedido]); // Cambiamos el estado del pedido de pendiente a recibido
        await connection.query('INSERT INTO entrada SET ?', entrada); // Registramos la entrada
        // Codigo para actualizar el stock de los insumos
        const detallePedido = await connection.query('SELECT idInsumo, cantidadPedido FROM detallepedido WHERE idPedido = ?', idPedido);
        for (let i = 0; i < detallePedido.length; i++) {
            // Trabajo para insumos
            const idInsumo = detallePedido[i].idInsumo;
            const stockActualInsumo = await connection.query('SELECT nombreInsumo, stock FROM insumos WHERE idInsumo = ?', idInsumo);
            const stockActual = stockActualInsumo[0].stock;
            const stockAumentar = detallePedido[i].cantidadPedido; // La cantidad del pedido para aumentar el stock del insumo una vez recibido
            const stockResultante = stockActual + stockAumentar;
            const stock = stockResultante; // Propiedad del objeto insumos
            if (!stock || stock === undefined || stock <= 0) res.status(400).json({ message: "Error en los calculos de aumentar stock" });
            const insumos = { stock };
            await connection.query('UPDATE insumos SET ? WHERE idInsumo = ?', [insumos, idInsumo]); // Actualizamos el stock de los insumos
            // Datos Actualizados
            console.log(`idInsumo: ${detallePedido[i].idInsumo}`);
            console.log(`Nombre Insumo: ${stockActualInsumo[0].nombreInsumo}`.red);
            console.log(`Stock Actual: ${stockActual}`);
            console.log(`Stock a aumentar: ${stockAumentar}`);
            console.log(`Stock Resultante: ${stockResultante}`);
            console.log();
        }
        res.json('Pedido Recibido - Stock Actualizado');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    selPedido,
    getPedido,
    insPedido,
    updPedido,
    delPedido,
    recibirPedidoRegistrarEntrada
}
