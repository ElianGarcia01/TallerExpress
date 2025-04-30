import { Router } from "express"
import { allEmployees, EmployeeByName, EmployeeByPosition } from "../controllers/employees/read.js"
import createMany from "../controllers/employees/createMany.js"
import update from "../controllers/employees/update.js"
import deleteEmployee from "../controllers/employees/delete.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/employees/create.js";
import register from "../controllers/employees/create.js"
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"
import passport from "../middlewares/passport.js"

const routerEmployees = Router()

routerEmployees.get("/allEmployees", passport.authenticate('jwt',{session: false}), allEmployees)
routerEmployees.get("/name/:nameParams", EmployeeByName)
routerEmployees.get("/position/:positionParams", EmployeeByPosition)
routerEmployees.post("/employeeCreate", validator(schema), accountExists, createHash, register)
routerEmployees.post("/employeesCreate", createMany)
routerEmployees.put("/updateEmployee", update)
routerEmployees.delete("/deleteEmployee", deleteEmployee)


export default routerEmployees