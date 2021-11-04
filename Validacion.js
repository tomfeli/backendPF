
function validarNumero(x){
    if(Number.isInteger(x)){
        if(x > 0){
            return x
        } else {
            console.log('No se acepta ese dato')
        }
}
}

export { validarNumero }