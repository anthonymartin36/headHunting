import express from 'express'
import * as db from '../db/db.js'

const router = express.Router()

router.get('/:json', async (req, res) => {
  const data = JSON.parse(req.params.json)

  // let data = {
  //   name: 'Anthony',
  //   selectedRole: 'Role',
  //   id: 1,
  // }

  //console.log(data)

  let jobX = await db.getJobAssignmentByRole(data.role)

  console.log(jobX)

  let viewData = { data, ...jobX[0] }

  console.log(viewData)
  res.render('invite', viewData)
})

export default router
