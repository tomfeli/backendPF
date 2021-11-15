let id = 1
const generadorDeIds = {
    generar: () => {
        return id++
    }
}

export function getGeneradorDeIds() {
    return generadorDeIds
}