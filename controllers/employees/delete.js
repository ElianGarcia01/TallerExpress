import Employee from "../../models/Employee.js"

let deleteEmployee = async (req, res, next) => {
    try {
        let EmployeeInfo = req.body
        console.log(EmployeeInfo)

        let deleteEmployee = await Employee.deleteOne(
            {name: EmployeeInfo.name}, // Condiciones de busqueda
        )

        return res.status(200).json({
            response: deleteEmployee
        })
        
    } catch (error) {
        next(error)
    }
}

export default deleteEmployee