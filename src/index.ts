// Dependencies
import {microGraphql} from 'graphql-server-micro'
import schema from './schema'

module.exports = microGraphql({schema})
