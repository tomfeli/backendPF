import jwt from '../modulos/moduleJwt/jwt.js';
import {getEnviadorMails} from '../modulos/moduloMail/index.js';
import {getDaoUsuarios} from '../daos/usuarios/index.js';

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
    constructor(){
        this.jwt = new jwt("secret");
        this.envMail= getEnviadorMails();
        this.daoUsuarios = getDaoUsuarios();
    }

    async ejecutar(usuario){
        const userDB= await this.daoUsuarios.userExists(usuario.email);
        if(userDB){
            throw new Error("El usuario ya existe");
        }else{
            try{
                await this.daoUsuarios.createUser(usuario);
                const text = `¡Bienvenid@!, tu usuario es: ${usuario.email}. Esperamos que disfrutes la experiencia, saludos.`;
                await this.envMail.send(usuario.email,"Creacion de usuario",text);
                return this.jwt.sign(usuario);
            }catch(error){
                throw new Error(error);
            }
        }
    }
}