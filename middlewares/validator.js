

const validator = (schema) => [
  (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false })
    if (validation.error) {
      return res.status(400).json({
        succes: false,
        message: validation.error.details.map(error => error.message)
      })
    }
    next()
  }
]

export default validator