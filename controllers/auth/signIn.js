import Employee from "../../models/Employee.js"

export default async (req, res, next) => {
  try {
    await Employee.findOneAndUpdate(
      { email: req.user.email },
      { online: true }
    )
    return res.status(200).json({
      success: true,
      message: "Signed in",
      token: req.token
    })
  } catch (error) {
    next(error)
  }
}
