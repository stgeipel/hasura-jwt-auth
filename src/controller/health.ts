import express from 'express'

const router = express.Router()

router.get('/health', async (_req, res, _next) => {
  // optional: add further things to check (e.g. connecting to dababase)
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  }
  try {
    res.send()
  } catch (e) {
    healthcheck.message = e
    res.status(503).send()
  }
})

export default router
