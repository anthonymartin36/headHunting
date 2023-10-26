export async function seed(knex) {
  await knex('a_job').del()
  await knex('r_job').del()
}
