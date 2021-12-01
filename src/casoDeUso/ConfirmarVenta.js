//Caso de uso Luciano Andres
import { getEnviadorMails } from '../modulos/moduloMail/index.js';
import { getDaoStock } from '../daos/stock/index.js';
import { createPdfGenerator } from "../modulos/moduloPdf/ModeloPdf.js";
import User from "../modelos/User.js"
import Item from "../modelos/Item.js"

export default class ConfirmarVenta {
    constructor() {
        this.ms = getEnviadorMails();
        this.pdf = createPdfGenerator();
        this.DaoStock = getDaoStock();

    };
    async confirmar(pedido) {
        let user = new User(pedido.id,
            pedido.nombre,
            pedido.mail,
            pedido.telefono,
            pedido.password
        );
        let items = pedido.items.map(item => {
            return new Item(item.id, item.nombre, item.price, item.cant)
        });

        //descontar Stock, se usa Dao compartido Tom
        this.DaoStock.descontarProductos(items);

        // armo la planilla pdf del stock
        const dataForFile = this.formatDataForFile(user, items);
        console.log(dataForFile);
        await createPdfGenerator().generarPdf(dataForFile);
        // envio el mail con el pdf 
        //to Mail al que se lo envio, subject asunto, text = texto, nombre del archivo. 
        let to = user.mail;
        let subject = "Confirmacion del Pedido";
        let text = "muchas gracias"


        await this.ms.sendFile(to, subject, text, `Pedido${new Date().toString().slice(0,9)}.pdf`);

        console.log("ok")
    }
    formatDataForFile(user, data) {
        let total = 0
        let pedidoPdf = `<H1>Pedido de ${user.nombre}:</H1><br>`;
        data.forEach((item) => {
            pedidoPdf += `<H5>Producto : ${item.nombre} </H5>`;
            pedidoPdf += `<H5>Cantidad : ${item.cant} </H5>`;
            pedidoPdf += `<H5>Precio Unitario : ${item.price} </H5>`;
            pedidoPdf += `<H5>Total : ${item.cant*item.price} </H5><br>`;
            total += (item.cant * item.price);

        });
       
        pedidoPdf += `<br><p>Total : ${total}</p>`
        pedidoPdf += `<br><p>Mail:${user.mail}</p>`
        pedidoPdf += `<br><p>Tel:${user.telefono}</p>`
        return pedidoPdf

    }


}