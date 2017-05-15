exports.seed = async function (knex) {
  const tableName = 'users'

  await knex(tableName).del()

  return knex(tableName).insert([{ email: 'a@b.cd' }])
}
