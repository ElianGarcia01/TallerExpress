import Employee from "../models/Employee.js"

export default async (req, res, next) => {
  try {
    let mail = req.body.email
    let account = await Employee.findOne({ email: mail })

    if (account) {
      req.user = {
        email: account.email,
        password: account.password,
        position: account.position
      }
      return next()
    }
    return res.status(400).json({
      success: false,
      message: "User does not exist",
    })
  } catch (error) {
    next(error)
  }
}
