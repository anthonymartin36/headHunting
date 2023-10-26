/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  //await knex('a_job').del()
  await knex('a_job').insert([
    { a_id: 666, a_role: 'Vampire', a_company: 'under 20s vampire coven', a_task: 'draining the blood from innocents', a_food: 'O+ blood because Martha has allergies', a_weapon: 'your teeth'  },
    { a_id: 667, a_role: 'Road Warrier', a_company: 'Formula 1 Horde', a_task: 'getting guzzeline and setting it on fire', a_food: 'a can of baked beans, preferably watties', a_weapon: 'a freaking machette'  },
    { a_id: 668, a_role: 'cannibal', a_company: 'Dysfunctional Williams Family (we eat each other sometimes)', a_task: 'seducing people for nutrition reasons', a_food: 'your unwanted family members', a_weapon: 'hot sauce (straight to the eyes)' },
  ])
}


// table.increments('a_id').primary()
//     table.string('a_role')
//     table.string('a_company')
//     table.string('a_task')
//     table.string('a_food')
//     table.string('a_weapon')