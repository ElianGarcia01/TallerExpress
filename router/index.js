import { Router } from "express"
import employeesRouter from "./employeesRouter.js"
import storesRouter from "./storesRouter.js"
import productsRouter from "./productsRouter.js"
import routerAuth from "./auth.js"

let routerIndex = Router()

routerIndex.use("/employees",employeesRouter)
routerIndex.use("/stores",storesRouter)
routerIndex.use("/products",productsRouter)
routerIndex.use("/auth",routerAuth)



export default routerIndex