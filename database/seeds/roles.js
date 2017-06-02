// Seed
exports.seed = async function (knex) {
  const tableName = 'roles'

  await knex(tableName).del()

  return knex(tableName).insert([{name: 'Admin'}])
}
