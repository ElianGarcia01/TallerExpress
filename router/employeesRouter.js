import { Router } from "express"
import { allEmployees, EmployeeByName, EmployeeByPosition } from "../controllers/employees/read.js"
import create from "../controllers/employees/create.js"
import createMany from "../controllers/employees/createMany.js"
import update from "../controllers/employees/update.js"
import deleteEmployee from "../controllers/employees/delete.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/employees/create.js";

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)
routerEmployees.get("/name/:nameParams", EmployeeByName)
routerEmployees.get("/position/:positionParams", EmployeeByPosition)
routerEmployees.post("/employeeCreate", validator(schema) ,create)
routerEmployees.post("/employeesCreate", createMany)
routerEmployees.put("/updateEmployee", update)
routerEmployees.delete("/deleteEmployee", deleteEmployee)


export default routerEmployees