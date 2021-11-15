function prepararPedido() {
    return {
        generarPlanillaPedido: (pedido) => {

            return `
        <!DOCTYPE HTML>
        <html>
        ${pedido.telefono}
        </html>`;
        },
        generarPlanillaDato: (dato) => {

            return `
        <!DOCTYPE HTML>
        <html>
        
        ${dato.pdf}
        </html>`;
        }
    }

}



export default prepararPedido;