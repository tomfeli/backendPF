import { Router } from "express";
import UsuarioService from "../servicios/usuarioServicio.js";
/*********************
 *  Autor: Jhonathan Antonio
 * Caso de uso: registro de usuario:
        Se reciben datos personales
        Se validan los datos
        Se crea un usuarie
        Se envía un mail de confirmación
        Se devuelve le usuarie con su identificador único generado
 * 
 */
const usuarioService = new UsuarioService();
const routerUsuario= Router();

routerUsuario.post('/registro', async(req,res)=>{
    try{
        const token = await usuarioService.nuevoUsuario(req.body);
        res.json(token);
    }
    catch(error){
        if(error.message.startsWith('NOT_FOUND')){
            res.status(404);
        } else if(error.message.startsWith('INVALID_ARGS')){
            res.status(400);
        }
        res.json({error:error.message.split(':')[1]});
    }
})
routerUsuario.post("/verificar",async(req,res)=>{
    try{
        await usuarioService.verificarUsuario(req.header('token'));
        res.json({mensaje:"Usuario verificado con exito"});
    }
    catch(error){
        res.status(401);
        res.json({error:error.message});
    }
})

export {routerUsuario};