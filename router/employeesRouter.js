import { Router } from "express"
import { allEmployees, EmployeeByName, EmployeeByPosition } from "../controllers/employees/read.js"
import create from "../controllers/employees/create.js"

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)
routerEmployees.get("/name/:nameParams", EmployeeByName)
routerEmployees.get("/position/:positionParams", EmployeeByPosition)
routerEmployees.post("/employeeCreate", create)


export default routerEmployees