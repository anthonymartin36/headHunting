import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const data = JSON.parse(req.body)

  res.send(data)
})

export default router
