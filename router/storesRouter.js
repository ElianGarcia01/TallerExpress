import { Router } from "express"
import { allStores, storeByName, storeByAddress } from "../controllers/stores/read.js"
import create from "../controllers/stores/create.js"

const routerStores = Router()

routerStores.get("/allStores", allStores)
routerStores.get("/name/:nameParams", storeByName)
routerStores.get("/address/:addressParams", storeByAddress)
routerStores.post("/storeCreate", create)

export default routerStores