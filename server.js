import express from "express"
import "dotenv/config.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port:" + PORT)


// Creacion de un endpoint
server.get("/hola",(request,response) => {
    response.send("Hola, Bienvenidos a Express")
})

// Creacion de un endpoint
server.get("/adios",(request,response) => {
    response.send("Adios")
})

// Server escucha peticiones del puerto y le indicamos que hacer
server.listen(PORT, ready)

