import Employee from "../../models/Employee.js"

let create = async (req, res, next) => {
    try {
        let EmployeeInfo = req.body
        console.log(EmployeeInfo)

        let createEmployee = await Employee.create(EmployeeInfo)
        return res.status(201).json({
            response: createEmployee
        }) 
        
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default create