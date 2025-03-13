import { Router } from "express"
import allProducts from "../controllers/products/read.js"

const routerProducts = Router()

routerProducts.get("/allProducts", allProducts)

export default routerProducts