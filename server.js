import express from "express"
import "dotenv/config.js"
import "./config/database.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port:" + PORT)

// Creation of endpoint
server.get("/hola", (request, response) => {
    response.send("Hola, Bienvenidos a Express")
})

// Creation of endpoint
server.get("/adios", (request, response) => {
    response.send("Adios")
})

// server listens for port requests and executes
server.listen(PORT, ready)

