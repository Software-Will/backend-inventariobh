import { getConnection } from './../database/database'

const selDetalleSalida = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM detalleSalida_view');
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

const getDetalleSalida = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM detalleSalida_view WHERE idDetalleSalida = ?', id);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

/**
 * Para insertar los detalles de una salida tendras que enviar un arreglo de objetos, cada objeto tiene el nombre de un insumo y su cantidad de salida, los ids se obtendran en el back
 * La actualizacion del stock (-) se realizara en esta misma funcion
 * 
 * [
 * {
 *      "nombreInsumo": "Hierro",
 *      "cantidadSalida": 1000
 *  },
 *  {
 *      "nombreInsumo": "Níquel",
 *      "cantidadSalida": 1000
 *  },
 *  {
 *      "nombreInsumo": "Cromo",
 *      "cantidadSalida": 1000
 *  }
 * ]
 */
const insDetalleSalida = async (req, res) => {
    try {
        const data = req.body;
        const auxIdsInsumos = [];
        const auxCantSalida = [];
        const connection = await getConnection();
        const auxIdSalida = await connection.query('SELECT idSalida FROM salida ORDER by idSalida DESC LIMIT 1'); // Obtenemos el ultimo registro de salida
        const idSalida = auxIdSalida[0].idSalida;
        for (let i = 0; i < data.length; i++) {
            const auxIdInsumo = await connection.query('SELECT idInsumo FROM insumos WHERE nombreInsumo = ?', data[i].nombreInsumo);
            auxIdsInsumos.push(auxIdInsumo[0].idInsumo);
            const auxObtenerCantSalida = data[i].cantidadSalida;
            auxCantSalida.push(auxObtenerCantSalida);
            // Insercion de datos
            const idInsumo = auxIdsInsumos[i];
            const cantidadSalida = auxCantSalida[i];
            const auxVal = [idSalida, idInsumo, cantidadSalida];
            if (auxVal.includes(undefined)) res.status(400).json({ message: "Verifique los campos para registrar detalles de salida" });
            const detalleSalida = { idSalida, idInsumo, cantidadSalida };
            await connection.query('INSERT INTO detallesalida SET ?', detalleSalida); // Se inserta la salida
        }
        // Para actualizar el stock, disminuir
        const detalleSalida = await connection.query('SELECT idInsumo, cantidadSalida FROM detalleSalida WHERE idSalida = ?', idSalida);
        for (let i = 0; i < detalleSalida.length; i++) {
            const auxIdInsumo = detalleSalida[i].idInsumo;
            const stockActualInsumo = await connection.query('SELECT nombreInsumo, stock FROM insumos WHERE idInsumo = ?', auxIdInsumo);
            const stockActual = stockActualInsumo[0].stock;
            const stockDisminuir = detalleSalida[i].cantidadSalida;
            const stockResultante = stockActual - stockDisminuir;
            const stock = stockResultante; // Propiedad del objeto insumos
            if (!stock || stock === undefined || stock <= 0) res.status(400).json({ message: "Error en los calculos para disminuir el stock" });
            const insumos = { stock };
            await connection.query('UPDATE insumos SET ? WHERE idInsumo = ?', [insumos, auxIdInsumo]); // Disminuir el stock
            // Datos Actualizados
            console.log(`idInsumo: ${detalleSalida[i].idInsumo}`);
            console.log(`Nombre Insumo: ${stockActualInsumo[0].nombreInsumo}`.red);
            console.log(`Stock Actual: ${stockActual}`);
            console.log(`Stock a disminuir: ${stockDisminuir}`);
            console.log(`Stock Resultante: ${stockResultante}`);
            console.log();

        }
        res.json('Detalles de la salida insertados - Stock actualizado (-)');
    } catch (error) {
        res.status(500);
        console.log(error.message);
    }
}

export const methods = {
    selDetalleSalida,
    getDetalleSalida,
    insDetalleSalida
}