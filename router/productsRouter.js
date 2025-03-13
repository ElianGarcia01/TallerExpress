import { Router } from "express"
import { allProducts, productByName, productByBrand } from "../controllers/products/read.js"
import create from "../controllers/products/create.js"
import createMany from "../controllers/products/createMany.js"

const routerProducts = Router()

routerProducts.get("/allProducts", allProducts)
routerProducts.get("/name/:nameParams", productByName)
routerProducts.get("/brand/:brandParams", productByBrand)
routerProducts.post("/productCreate", create)
routerProducts.post("/productsCreate", createMany)

export default routerProducts