import InformarCambioPrecios from "../src/casoDeUso/InformarCambioPrecio.js";


const informarCambio = new InformarCambioPrecios();

let id = 2;
let precio = 300;
let email = 'franzoniclara23@gmail.com';
await informarCambio.informar(id,precio,email);
