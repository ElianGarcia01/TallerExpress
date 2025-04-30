import { Router } from "express"
import signIn from "../controllers/auth/signIn.js"
import validator from "../middlewares/validator.js"
import schema from "../schemas/auth/signIn.js"
import accountNotExists from "../middlewares/accountNotExists.js"
import validedPassword from "../middlewares/validedPassword.js"

const routerAuth = Router()

routerAuth.post('/signIn', validator(schema), accountNotExists, validedPassword, signIn)

export default routerAuth