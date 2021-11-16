import { Router } from "express";
import InformarCotizacion from "../casoDeUso/InformarCotizacion.js";

const routerStock= Router();

routerStock.post('/', async(req,res)=>{
    try{
        const IC = new InformarCotizacion();
        await IC.informarPrecioItems(req.body.ids,req.body.to);
        res.sendStatus(201)
    }
    catch(error){
        if(error.message.startsWith('NOT_FOUND')){
            res.status(404);
        } else if(error.message.startsWith('INVALID_ARGS')){
            res.status(400);
        }
    }
})
export {routerStock};