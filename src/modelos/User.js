export class User{
    constructor(id,nombre,mail,telefono){
        this.setId(id);
        this.setNombre(nombre);
        this.setMail(mail);
        this.setTelefono(telefono);
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
        if(!mail){
            throw new Error("INVALID_ARG: mail cannot be empty")
        }
        this.mail=mail;
    }
    setTelefono(telefono){
        if(!telefono){
            throw new Error("INVALID_ARG: telefono cannot be empty")
        }
        this.telefono=telefono;
    }
}