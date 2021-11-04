
function crearErrorDeAPI(msg) {
    const err = new Error(msg)
    err.type = 'API_ERROR'
    return err
}

export { crearErrorDeAPI }