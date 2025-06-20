import Employee from "../models/Employee.js"

export default async (req, res, next) => {
  try {
    let mail = req.body.email;
    let account = await Employee.findOne({ email: mail })

    if (account) {
      return res.status(400).json({
        succes: false,
        message: "User alredy exists",
      })
    }
    next()
  } catch (error) {
    next(error)
  }
}
