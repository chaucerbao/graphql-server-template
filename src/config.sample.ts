export default {
  secret: '',
  knex: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
}
