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
import UsuarioService from "../src/servicios/usuarioServicio.js";

const usuarioService = new UsuarioService()
    try {
        const user ={
            nombre: 'Jhonathan',
            email: 'ajhonatan27@gmail.com',
            telefono: '123456789',
            password: '123456'
        }
        const resCreacion = await usuarioService.nuevoUsuario(user);
        console.log(resCreacion);

        const token = resCreacion.token;
        const resVerificacion = await usuarioService.verificarUsuario(token);
        console.log(resVerificacion)
    } catch (error) {
        console.log(error)
    }