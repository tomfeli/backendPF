//modulo Luciano Andres
import pdf from "html-pdf";
import prepararPedido from "./Plantilla.js";



export function createPdfGenerator() {
    return {
        //genera la plantilla de un pedido
        generarPdf: (pedido) => {
            return new Promise((resolve, reject) => {
                pdf.create(prepararPedido().generarPlanillaPedido(pedido))
                    .toFile(
                        `./${pedido.nombre}.pdf`,
                        function(err) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(`./${pedido.nombre}.pdf`);
                            }
                        }
                    );
            })
        },
        //enviar cambio de divisa 
        generarDivisa: (dato) => {
            return new Promise((resolve, reject) => {
                pdf.create(prepararPedido().generarPlanillaDato(dato))
                    .toFile(
                        //cambiar la ruta segun corresponda
                        `/home/tom/TP2/tp2/reports/${dato.name}.pdf`,
                        function(err) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(`/home/tom/TP2/tp2/reports/${dato.name}.pdf`);
                            }
                        }
                    );
            })
        }
    }
}