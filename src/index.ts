// Dependencies
import {microGraphql} from 'graphql-server-micro'
import * as knex from 'knex'

import databaseConfig from './config/database'
import schema from './schema'

// Context
const context = {
  db: knex(databaseConfig)
}

module.exports = microGraphql({schema, context})
