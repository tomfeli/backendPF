export default class User{
    constructor(id,nombre,mail,telefono,password){
        this.setId(id);
        this.setNombre(nombre);
        this.setMail(mail);
        this.setTelefono(telefono);
        this.setPassword(password);
    }
    setId(id){
        if(!id){
            throw new Error("INVALID_ARG: id cannot be empty")
        }
        this.id=id;
    }
    setNombre(nombre){
        if(!nombre){
            throw new Error("INVALID_ARG: name cannot be empty")
        }
        this.nombre=nombre;
    }
    setMail(mail){
        let emailExpr = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        if(!mail){
            throw new Error("INVALID_ARG: mail cannot be empty")
        }
        if(!emailExpr.test(mail)){
            throw new Error("INVALID_ARG: mail is not valid")
        }
        this.mail=mail;
    }
    setTelefono(telefono){
        if(!telefono){
            throw new Error("INVALID_ARG: telefono cannot be empty")
        }
        this.telefono=telefono;
    }
    setPassword(password){
        if(password.length < 6){
            throw new Error("INVALID_ARG: Password is not valid");
        }
        this.password = password;
    }
}