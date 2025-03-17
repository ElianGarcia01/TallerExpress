import Employee from "../../models/Employee.js"

let allEmployees = async (req, res, next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let EmployeeByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams
        let all = await Employee.find({ name: nameQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

let EmployeeByPosition = async (req, res, next) => {
    try {
        let nameQuery = req.params.positionParams
        let all = await Employee.find({ position: nameQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allEmployees, EmployeeByName, EmployeeByPosition }