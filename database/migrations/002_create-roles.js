// Migration up
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('roles', t => {
      t.increments()
      t.string('name').notNullable()

      t.unique('name')
    }),

    knex.schema.createTable('roles_users', t => {
      t.integer('role_id').unsigned()
      t.integer('user_id').unsigned()

      t.foreign('role_id').references('roles.id')
      t.foreign('user_id').references('users.id')

      t.index(['user_id', 'role_id'])
    })
  ])
}

// Migration down
exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('roles_users'),
    knex.schema.dropTable('roles')
  ])
}
