import express from 'express';
import { routerStock } from './rutas/stockRouter.js';
import {PORT} from "./config/config.js";
const app= express();
app.use(express.json());
app.use('/api/stock',routerStock);
const server = app.listen(PORT,()=>{
    console.log(`escuchando en el puerto ${server.address().port}`)
});