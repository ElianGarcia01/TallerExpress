import Employee from "../../models/Employee.js"

export default async (req, res, next) => {
    try {
        return res.status(200).json({
            succes: true,
            message: "Signed in"
        })
    } catch (error) {
        next(error)
    }
}