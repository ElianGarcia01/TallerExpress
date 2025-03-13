import { response } from "express"
import Employee from "../../models/Employee.js"


let allEmployees = async (req,res,next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default allEmployees