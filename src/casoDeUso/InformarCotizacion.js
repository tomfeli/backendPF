import {getEnviadorMails} from '../modulos/moduloMail/index.js';
import {getConversor} from "../modulos/moduloConversor/index.js";
import {getDaoStock} from '../daos/stock/index.js';
import {createPdfGenerator} from "../modulos/moduloPdf/ModeloPdf.js";
import {getGeneradorDeIds} from "../modulos/moduloId/index.js";
import Item from "../modelos/Item.js";
export default class InformarCotizacion{
    constructor(){
        this.ms=getEnviadorMails();
        this.DaoStock=getDaoStock();
        this.conversor=getConversor();
        this.generadorIdsParaItems=getGeneradorDeIds();
    }
    async informarPrecioItems(idItems,to){
            //traer datos de stock
        let items=await this.DaoStock.getItemsById(idItems);
            //traer precios convertidos del stock
        let USD=await this.conversor.getDato("ARS","USD",1);
        let EUR=await this.conversor.getDato("ARS","EUR",1);
            
        let formatedItems=items.map((item)=> this.formatDataWithPrices(item,USD,EUR)); 
            //formatear info para archivo 
        let dataForArchive={
            name:`reporte${to}_${new Date().toString()}`,
            pdf:this.formatDataForFile(formatedItems)
        }
            //armar archivo
        await createPdfGenerator().generarDivisa(dataForArchive);
            //enviar mail
        await this.ms.sendFile(
            to,
            "pedido de cotizacion",
            "A continuacion se adjunta la cotizacion solicitada",
            `${dataForArchive.name}.pdf`
        );
    }
    formatDataWithPrices(item,USD,EUR){
        return{
                "id":this.generadorIdsParaItems.generar(),
                "nombre":item.name,
                "ARS":item.price.toString(),
                "USD":(item.price*USD.result.amount).toString(),
                "EUR":(item.price*EUR.result.amount).toString()
            }
    }
    formatDataForFile(data){
            let reporte = '<H1>Informe de cotizacion:</H1><br><ul>';
            for(const item of data) {
                reporte += `<li><H2>${item.nombre}:</H2><br><ul>`
                Object.keys(item).forEach((k)=>{
                    if(k!=='nombre' && k!=='id'&& item[k]!=null){
                        reporte+=`<li>${k}:${item[k]}</li>\n`
                    }
                })
                reporte+='</ul></li>'
            }
            reporte += '</ul>'
            return reporte
            
    }
}