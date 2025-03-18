import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"
import error_400 from "./middlewares/error_400.js"
import headerReq from "./middlewares/headersReq.js"
import methodCounter from "./middlewares/methodCounter.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port:" + PORT)

// Basic settings
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use(methodCounter)
server.use(headerReq)

// configure router
server.use("/api", routerIndex)
server.use(not_found_handler) //Este es el ultimo middleware normal

// Error handling configuration
server.use(error_400)
server.use(error_handler) //Este es el ultimo middleware de error


// server listens for port requests and executes
server.listen(PORT, ready)