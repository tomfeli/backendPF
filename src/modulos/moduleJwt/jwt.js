import jwt from 'jsonwebtoken';
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
export default class jwt_module{
    constructor(secretKey){
        this.secret = secretKey;
    }
    sign(payload){
        const token = jwt.sign(payload,this.secret)
        return {token};
    }
    verify(token){
        return jwt.verify(token,this.secret,(error,authData)=>{
            if(error) throw new Error("Autorizacion denegada");
            return {authData};
        });
    }
}