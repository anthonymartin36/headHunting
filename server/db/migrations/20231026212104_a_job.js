/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return await knex.schema.createTable('a_job', (table) => {
    table.increments('a_id').primary()
    table.string('a_role')
    table.string('a_company')
    table.string('a_task')
    table.string('a_food')
    table.string('a_weapon')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return await knex.schema.dropTable('a_job')
}
