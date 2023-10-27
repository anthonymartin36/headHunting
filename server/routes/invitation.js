import express from 'express'
import * as db from '../db/db.js'

const router = express.Router()

router.get('/:json', async (req, res) => {
  // const data = JSON.parse(req.params.json)

  let data = {
    name: 'Anthony',
    selectedRole: 'Role',
  }

  let jobAssignment = await db.getJobAssignment()

  res.send(data)
})

export default router
