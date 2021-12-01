import { getEnviadorMails } from '../modulos/moduloMail/index.js';
import { getConversor } from '../modulos/moduloConversor/index.js';
import { getDaoStock } from '../daos/stock/index.js';
import { crearErrorDeUsuario } from '../msjError/errorMsj.js';
import { crearErrorDeApi } from '../msjError/errorMsj.js';
import Item from '../modelos/Item.js';
import { getGeneradorDeIds } from '../modulos/moduloId/index.js';
export default class InformarCambioPrecios{
    constructor(){
        this.ms=getEnviadorMails();
        this.DaoStock=getDaoStock();
        this.conversor=getConversor();
        this.generadorIdsParaItems=getGeneradorDeIds();
    }
    async ejecutarCambioPrecio(idProducto,price){
        try {
            let item = await this.DaoStock.getItemsById([idProducto]);

            item = item[0];

            let producto = new Item(item.id,item.name,price,item.cant);
             producto = await this.DaoStock.update(producto);

            return producto;

        } catch(error){
            throw crearErrorDeUsuario(error)
        }

        }

    async informarDivisa(item){
        try {

            let divisaUSD = await this.conversor.getDato('ARS','USD',item.price);
            let divisaEUR = await this.conversor.getDato('ARS','USD',item.price);
            let resultado = `El item con id: ${item.id.toString()} cambio de precio : ${item.price}. Su precio en dolares es: ${(divisaUSD.result.amount*item.price).toString()} y en Euros es: ${(divisaEUR.result.amount*item.price).toString()} `
            return resultado;




    } catch(error){
        throw crearErrorDeApi('El servicio no responde')
    }

    }


    async informar(id,precio,email){
       let producto = await this.ejecutarCambioPrecio(id,precio);
       let usuario = email;
       let divisa = await this.informarDivisa(producto);
       const asunto = 'Se informa un cambio de precio';


       await this.ms.send(usuario,asunto,divisa)

}




}
