import { Router } from "express"
import { allProducts, productByName, productByBrand } from "../controllers/products/read.js"

const routerProducts = Router()

routerProducts.get("/allProducts", allProducts)
routerProducts.get("/name/:nameParams", productByName)
routerProducts.get("/brand/:brandParams", productByBrand)

export default routerProducts