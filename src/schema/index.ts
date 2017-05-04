// Dependencies
import {makeExecutableSchema} from 'graphql-tools'
import {merge} from 'lodash'

// Schemas
import user from './user'

const VERSION = '0.0.1'

const baseSchema = {
  typeDefs: [
    `type Query {
      version: String
    }`
  ],
  resolvers: {
    Query: {
      version: () => VERSION
    }
  }
}

const schemas = [user]

// Generate the GraphQL Schema
const graphqlSchema = makeExecutableSchema(
  schemas.reduce((aggregate, schema) => {
    aggregate.typeDefs.push(schema.types)
    aggregate.resolvers = merge(aggregate.resolvers, schema.resolvers)

    return aggregate
  }, baseSchema)
)

export default graphqlSchema
