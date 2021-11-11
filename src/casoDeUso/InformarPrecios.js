import {getEnviadorMails} from '../modulos/moduloMail/index';
import {getConversor} from "../modulos/moduloConversor/index";
import {getDaoStock} from '../daos/stock/index';
export default class InformarPrecios{
    constructor(){
        this.ms=getEnviadorMails();
        this.DaoStock=getDaoStock();
        this.conversor=getConversor();
    }
    async informar(to){
        
        //trater datos de stock
        let stock= this.DaoStock.getAll();

        //traer precios convertidos del stock
        let formatedStock=stock.map((item)=>{
            let result={
                "name":item.name,
                "ARS":item.price,
                "USD":this.conversor.getDato("ARS","USD",item.price)
            }
            return result;
        }); 
        //armar archivo
        //enviar mail
        

    }
}