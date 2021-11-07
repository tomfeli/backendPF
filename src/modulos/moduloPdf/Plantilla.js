function prepararPedido() {
    return {
        generarPlanillaPedido: (pedido) => {

            return `
        <!DOCTYPE HTML>
        <html>
        ${pedido.telefono}
        </html>`;
        }
    }

}



export default prepararPedido;