import Employee from "../../models/Employee.js"

let createMany = async (req, res, next) => {
    try {
        let employees = req.body
        let createdEmployees = await Employee.insertMany(employees)
        return res.status(201).json({
            response: createdEmployees
        })
    } catch (error) {
        next(error)
    }
}

export default createMany