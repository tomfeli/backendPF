function crearErrorDeUsuario(msg) {
    const errObj = new Error(msg)
    errObj.type = 'USER_ERROR'
    return errObj
}

function crearErrorDeApi(msg) {
    const errObj = new Error(msg)
    errObj.type = 'API_ERROR'
    return errObj
}


export { crearErrorDeUsuario, crearErrorDeApi }