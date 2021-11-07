import createPdfGenerator from "./ModeloPdf.js"


const pedido = {
    numero: 1,
    fecha: '02/11/2021',
    nombre: 'Luciano Andres',
    telefono: '1138059236',

    pedido: [{
            nombre: 'jabon',
            cantidad: 2,
            precioUnitario: 1000,
            precioTotal: 2000,
        },
        {
            nombre: 'crema kasis',
            cantidad: 1,
            precioUnitario: 900,
            precioTotal: 900,
        }
    ]
}
createPdfGenerator().generarPdf(pedido);