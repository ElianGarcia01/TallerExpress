import { Router } from "express"
import allEmployees from "../controllers/employees/read.js"

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)

export default routerEmployees