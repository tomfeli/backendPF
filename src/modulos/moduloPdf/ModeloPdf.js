import pdf from "html-pdf";
import prepararPedido from "./Plantilla.js";



function createPdfGenerator() {
    return {
        generarPdf: (pedido) => {
            return new Promise((resolve, reject) => {
                console.log("llega aca 1")
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
        }
    }
}
export default createPdfGenerator;