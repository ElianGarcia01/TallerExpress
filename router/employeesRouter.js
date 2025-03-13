import { Router } from "express"
import { allEmployees, EmployeeByName, EmployeeByPosition } from "../controllers/employees/read.js"

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)
routerEmployees.get("/name/:nameParams", EmployeeByName)
routerEmployees.get("/position/:positionParams", EmployeeByPosition)

export default routerEmployees