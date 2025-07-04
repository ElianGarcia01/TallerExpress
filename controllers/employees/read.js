import Employee from "../../models/Employee.js"
import "../../models/Store.js";

let allEmployees = async (req, res, next) => {
    try {

        let {name, position} = req.query

        let query = {}

        if (name) {
            query.name = {$regex: name , $options: 'i'}
        }

        if (position) {
            query.position = position
        }
        
        let all = await Employee.find(query)

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