exports.up = function (knex) {
  return knex.schema.createTable('users', t => {
    t.increments()
    t.string('email')
    t.string('password')
    t.timestamps()

    t.unique('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
