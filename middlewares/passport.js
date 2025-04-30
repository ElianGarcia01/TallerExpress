import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import Employee from "../models/Employee.js"

export default passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (jwt_payload, done) => {
      try {
        let employee = await Employee.findOne({ email: jwt_payload.email, online: true })
        if (employee) {
          return done(null, employee)
        } else {
          return done(null, null)
        }
      } catch (error) {
        return done(error, null)
      }
    }
  )
)
