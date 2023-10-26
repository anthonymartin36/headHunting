import { getAllByRole } from '@testing-library/dom'
import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  console.log(await db.getAllRoles())
  res.render('home')
})

export default router
