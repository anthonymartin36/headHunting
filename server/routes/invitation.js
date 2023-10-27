import express from 'express'
import * as db from '../db/db.js'

const router = express.Router()

router.get('/:json', async (req, res) => {
  // const data = JSON.parse(req.params.json)

  let data = {
    name: 'Anthony',
    selectedRole: 'Role',
    id: 1,
  }

  let jobX = await db.getJobAssignment(data.id)

  let viewData = { data, ...jobX[0] }

  console.log(viewData)
  res.render('invite', viewData)
})

export default router
