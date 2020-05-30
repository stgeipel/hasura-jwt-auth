import * as bodyParser from 'body-parser'
import express from 'express'
import healthController from './controller/health'
import passport from 'passport'
import dotenv from 'dotenv'
import serverless from 'serverless-http'

import * as userController from './controller/user'

dotenv.config()

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

app.post('/auth/login', userController.postLogin)
app.use('/check', healthController)

app.get('/', (req, res) => {
  res.json('ok')
})

export default app
export const handler = () => serverless(app)
