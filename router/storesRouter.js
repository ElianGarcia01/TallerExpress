import { Router } from "express"
import { allStores, storeByName, storeByAddress } from "../controllers/stores/read.js"

const routerStores = Router()

routerStores.get("/allStores", allStores)
routerStores.get("/name/:nameParams", storeByName)
routerStores.get("/address/:addressParams", storeByAddress)

export default routerStores