import colors from 'colors'
import app from './app'

import { getConnection } from './database/database'

const main = async () => {
    app.listen(app.get('port'), () => {
        console.log(`Server Ok -> Port: ${app.get('port')}`.blue);
    });
    if (await getConnection()) console.log('DB -> Ok'.blue);
};

main(); //Inicializamos el servidor