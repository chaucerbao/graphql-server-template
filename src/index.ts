// Dependencies
import {microGraphql} from 'graphql-server-micro'
import * as knex from 'knex'

import config from './config'
import schema from './schema'

// Context
const context = {
  db: knex(config.database)
}

module.exports = microGraphql({schema, context})
