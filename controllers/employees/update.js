import Employee from "../../models/Employee.js"

let update = async (req, res, next) => {
    try {
        let EmployeeInfo = req.body
        let updateEmployee = await Employee.updateOne(
            {name: EmployeeInfo.name}, // Condiciones de busqueda
            {store: EmployeeInfo.store}, // Modificaciones
        )

        return res.status(200).json({
            response: updateEmployee
        })
        
    } catch (error) {
        next(error)
    }
}

export default update