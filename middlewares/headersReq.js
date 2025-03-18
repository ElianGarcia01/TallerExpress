
// Middleware para mostrar en consola el header de la solicitud http

const headerReq  = (req, res, next) => {

    console.log("Header de la solicitud:", JSON.stringify(req.headers, null, 2))
    
    // Continuar al siguiente middleware
    next()
}

export default headerReq