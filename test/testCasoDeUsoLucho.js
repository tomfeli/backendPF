import confirmarVenta from "../src/casoDeUso/ConfirmarVenta.js"
const cv = new confirmarVenta();
const pedido = {

    "id": 1,
    "nombre": "Luciano",
    "mail": "fiszsontom@gmail.com",
    "telefono": 1130918686,
    "password": 123456,

    "items": [{
        "id": 1,
        "nombre": "Crema Castañas",
        "cant": 2,
        "price": 1000
    }, {
        "id": 2,
        "nombre": "Jabones",
        "cant": 5,
        "price": 200
    }]
}
cv.confirmar(pedido);