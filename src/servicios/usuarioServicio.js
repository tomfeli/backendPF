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
        import RegistroDeUsuario from "../casoDeUso/RegistroDeUsuario.js";
        import jwt from '../modulos/moduleJwt/jwt.js'
        const CLAVE_SECRETA = "secret";
        export default class UsuarioService {
            constructor() {
                this.registroDeUsuario = new RegistroDeUsuario(CLAVE_SECRETA);
                this.jwt = new jwt(CLAVE_SECRETA);
            }
            async nuevoUsuario(user) {
                return this.registroDeUsuario.ejecutar(user);
            }
            async verificarUsuario(token){
                return this.jwt.verify(token)
            }
        }