import { Router } from "express"
import { allEmployees, EmployeeByName, EmployeeByPosition } from "../controllers/employees/read.js"
import create from "../controllers/employees/create.js"
import createMany from "../controllers/employees/createMany.js"

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)
routerEmployees.get("/name/:nameParams", EmployeeByName)
routerEmployees.get("/position/:positionParams", EmployeeByPosition)
routerEmployees.post("/employeeCreate", create)
routerEmployees.post("/employeesCreate", createMany)

export default routerEmployees