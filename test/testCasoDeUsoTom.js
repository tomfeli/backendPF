import {getInformadorDeCotizacion} from "../src/casoDeUso/index.js";

const informador = getInformadorDeCotizacion();

let to= "fiszsontom@gmail.com";
let ids=[1,2];
let ids2=[];

await informador.informarPrecioItems(ids,to);
await informador.informarPrecioItems(ids2,to).catch(console.error);