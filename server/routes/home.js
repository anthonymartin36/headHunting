import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  //Get all Roles from the Database
  // console.log(await db.getAllRoles())

  //Get all Job assignment from role table (a_id from a_job)
  // console.log(await db.getJobAssignment(1))

  const roles = await db.getAllRoles()

  const viewData = { roles }

  res.render('home', viewData)
})

export default router
