export default class Item {
    constructor(id, nombre, price, cant = 1) {
        this.setId(id);
        this.setNombre(nombre);
        this.setPrice(price);
        this.setCant(cant);
    }
    setId(id) {
        if (!id) {
            throw new Error("INVALID_ARG: id cannot be empty")
        }
        this.id = id;
    }
    setNombre(nombre) {
        if (!nombre) {
            throw new Error("INVALID_ARG: name cannot be empty")
        }
        this.nombre = nombre;
    }
    setCant(cant) {
        if (!cant) {
            //mejorar validacion 
            throw new Error("INVALID_ARG: cant cannot be empty")
        }
        this.cant = cant;
    }
    setPrice(price) {
        if (!price) {
            //mejorar validacion 
            throw new Error("INVALID_ARG: price cannot be empty")
        }
        this.price = price;
    }

}