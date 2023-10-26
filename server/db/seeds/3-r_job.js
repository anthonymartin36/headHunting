/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('r_job').del()
  await knex('r_job').insert([
    {
      r_id: 1,
      r_role: 'Accountant',
      r_task: 'stapling pieces of paper',
      r_a_id: 2,
    },
    {
      r_id: 2,
      r_role: 'Software Engineer',
      r_task: 'console.logging',
      r_a_id: 2,
    },
    {
      r_id: 3,
      r_role: 'Toilet Cleaner',
      r_task: 'dealing with poop',
      r_a_id: 3,
    },
    {
      r_id: 4,
      r_role: 'Teacher',
      r_task: 'telling people that it is not a stupid question',
      r_a_id: 1,
    },
    {
      r_id: 5,
      r_role: 'Penguin Trainer',
      r_task: 'throwing fish at penguins',
      r_a_id: 2,
    },
    {
      r_id: 6,
      r_role: 'Call Center Employee',
      r_task: 'saying, how may I help you today?',
      r_a_id: 1,
    },
  ])
}
