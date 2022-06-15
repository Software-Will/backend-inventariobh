import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import administradorRoutes from './routes/administrador.routes'
import proveedoresRoutes from './routes/proveedores.routes'
import insumosRoutes from './routes/insumos.routes'
import categoriaRoutes from './routes/categoria.routes'
import manufacturaRoutes from './routes/manufactura.routes'
import pedidoRoutes from './routes/pedido.routes'
import detallePedidoRoutes from './routes/detallePedido.routes'

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routers
app.use('/api/administrador', administradorRoutes);
app.use('/api/insumos', insumosRoutes);
app.use('/api/categoria', categoriaRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/manufactura', manufacturaRoutes);

//!
app.use('/api/pedido', pedidoRoutes);

app.use('/api/detallePedido', detallePedidoRoutes);

export default app;
