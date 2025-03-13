import { Router } from "express"
import employeesRouter from "./employeesRouter.js"
import storesRouter from "./storesRouter.js"
import productsRouter from "./productsRouter.js"

let routerIndex = Router()

routerIndex.use("/employees",employeesRouter)
routerIndex.use("/stores",storesRouter)
routerIndex.use("/products",productsRouter)

export default routerIndex