import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getUsers() {
  return connection('users').select()
}

export async function getUser(id) {
  return connection('users').where('id', id).first()
}

export async function getAllRoles() {
  return connection('r_job').select()
}

export async function getJobAssignment(r_id) {
  //console.log(r_id)
  //where causes an error of type

  return connection('a_job')
    .where('r_id', r_id)
    .join('r_job', 'r_a_id', 'a_job.a_id')
}
export async function getJobAssignmentByRole(r_role) {
  //console.log(r_id)
  //where causes an error of type

  return connection('a_job')
    .where('r_role', r_role)
    .join('r_job', 'r_a_id', 'a_job.a_id')
}
