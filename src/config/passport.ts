import passport from 'passport'
import passportLocal from 'passport-local'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
})
const LocalStrategy = passportLocal.Strategy

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    prisma.user
      .findOne({ where: { email: email } })
      .then((user) => {
        // if (err) {
        //   return done(err)
        // }
        if (!user) {
          return done(undefined, false, { message: `Email ${email} not found.` })
        }
        return done(undefined, false, { message: 'Invalid email or password.' })
        // user.comparePassword(password, (err: Error, isMatch: boolean) => {
        //   if (err) {
        //     return done(err)
        //   }
        //   if (isMatch) {
        //     return done(undefined, user)
        //   }
        //   return done(undefined, false, { message: 'Invalid email or password.' })
        // })
      })
      .catch((e) => {
        console.log(e)
        done(e, null)
      })
  })
)
