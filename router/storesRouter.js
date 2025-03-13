import { Router } from "express"
import allStores from "../controllers/stores/read.js"

const routerStores = Router()

routerStores.get("/allStores", allStores)

export default routerStores