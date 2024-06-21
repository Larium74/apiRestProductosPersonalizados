import dotenv from 'dotenv';
dotenv.config(); // Esto debe estar al principio

import express from 'express';
import connectiondb from './database/connection.js'; // Ajusta la ruta según tu estructura de carpetas
import clientesRouter from './routes/clientes.routes.js';
import { PORT } from './config.js';
const app = express();

app.use ("/", clientesRouter)
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});