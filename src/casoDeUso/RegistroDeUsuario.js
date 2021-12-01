import jwt from '../modulos/moduleJwt/jwt.js';
import {getEnviadorMails} from '../modulos/moduloMail/index.js';
import {getDaoUsuarios} from '../daos/usuarios/index.js';
import { getGeneradorDeIds } from '../modulos/moduloId/index.js';
import Usuario from '../modelos/User.js';
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

export default class RegistroDeUsuario{
    constructor(claveSecreta){
        this.jwt = new jwt(claveSecreta);
        this.generadorId = new getGeneradorDeIds();
        this.envMail= getEnviadorMails();
        this.daoUsuarios = getDaoUsuarios();
    }

    async ejecutar({nombre, email, telefono,password}){
        const id= this.generadorId.generar();
        const user= await this.daoUsuarios.getByEmail(email);
        if(user){
            throw new Error("El usuario ya existe");
        }else{
            let userValid = new Usuario(id,nombre,email,telefono,password);
            await this.daoUsuarios.save(userValid);
            const text = `¡Hola ${nombre}!, tu usuario es: ${email}. Esperamos que disfrutes la experiencia, saludos.`;
            await this.envMail.send(email,"Creacion de usuario",text);
            const payload= {
                email,
                password
            }
            return this.jwt.sign(payload);
        }
    }
}