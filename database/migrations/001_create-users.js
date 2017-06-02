// Migration up
exports.up = function (knex) {
  return knex.schema.createTable('users', t => {
    t.increments()
    t.string('email').notNullable()
    t.string('password').notNullable()
    t.timestamps(false, true)

    t.unique('email')
  })
}

// Migration down
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
