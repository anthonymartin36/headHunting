/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return await knex.schema.createTable('r_job', (table) => {
    table.increments('r_id').primary()
    table.string('r_role')
    table.string('r_task')
    table.integer('r_a_id').references('a_job.a_id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return await knex.schema.dropTable('r_job')
}
