

// Objeto para almacenar el conteo de métodos
const methodCount = {
    GET: 0,
    POST: 0,
    PUT: 0,
    DELETE: 0,
}

// Middleware para contar y mostrar el uso de los métodos HTTP

const methodCounter = (req, res, next) => {

    if (methodCount[req.method] !== undefined) {
        methodCount[req.method]++
    } else {
        methodCount[req.method] = 1
    }

    // Mostrar el conteo actual
    console.log(`Método ${req.method} ha sido usado ${methodCount[req.method]} veces`)

    // Continuar al siguiente middleware
    next()
}

export default methodCounter