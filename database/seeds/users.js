// Dependencies
const bcrypt = require('bcryptjs')

// Seed
exports.seed = async function (knex) {
  const tableName = 'users'

  await knex(tableName).del()

  return knex(tableName).insert([
    {email: 'admin@site.com', password: bcrypt.hashSync('secret')}
  ])
}
