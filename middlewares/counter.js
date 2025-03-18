
// Middleware para mostrar en consola la cantidad de solicitudes realizadas

let contadorR = 0
const contador = (req, res, next) => {
    
    console.log("Haz hecho " + contadorR + " peticiones")
    contadorR++

    // Continuar con la siguiente función middleware
    next()
}

export default contador