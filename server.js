import express from "express"
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import routerIndex from "./router/index.js";

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port:" + PORT)

// Basic settings
server.use(express.urlencoded({extended:true}))
server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

// configure router
server.use("/api",routerIndex)

// server listens for port requests and executes
server.listen(PORT, ready)