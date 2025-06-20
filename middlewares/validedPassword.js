import bcryptjs from "bcryptjs"

export default async (req, res, next) => {
  const passwordBody = req.body.password
  const passwordDB = req.user.password

  const isMatch = bcryptjs.compareSync(passwordBody, passwordDB)

  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid credentials"
    })
  }
  return next()
}
