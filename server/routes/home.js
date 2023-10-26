import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  res.render('home')
})

export default router
