const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const UserModel = require('../models/user')

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.user.create({
          email,
          password,
        })

        return done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
)

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.user.findOne({
          email,
        })

        if (!user) {
          return done(null, false, {
            message: 'User not found',
          })
        }

        const validate = await user.isValidPassword(password)

        if (!validate) {
          return done(null, false, {
            message: 'Wrong Password',
          })
        }
        if (!user.activated) {
          return done(null, false, {
            message: 'Not Activated',
          })
        }

        return done(null, user, {
          message: 'Logged in Successfully',
        })
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'fgh5%$&§$HFDsdfDSF41485345SDG%5333$FGDSGD',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user)
      } catch (error) {
        done(error)
      }
    }
  )
)
