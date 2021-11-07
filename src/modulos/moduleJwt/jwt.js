import jwt from 'jsonwebtoken';
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
            if(error) return {error};
            return {authData};
        });
    }
}