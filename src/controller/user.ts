import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import passport from 'passport'
import '../config/passport'

export const postLogin = async (req: Request, res: Response, next: NextFunction) => {
  await check('email', 'Email is not valid').isEmail().run(req)
  await check('password', 'Password cannot be blank').isLength({ min: 1 }).run(req)

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.redirect('/login')
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return handleResponse(res, 400, err)
    }
    if (user) {
      handleResponse(res, 200, JSON.stringify(user))
    }
    handleResponse(res, 401, 'email or password is incorrect')
  })(req, res, next)
}

function handleResponse(res: Response, code: number, statusMsg: string) {
  res.status(code).json(statusMsg)
}
