// Dependencies
import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

// Schemas
import auth from './auth'
import role from './role'
import user from './user'

const schemas = [auth, role, user]

const VERSION = '0.0.1'
const baseSchema = {
  typeDefs: [
    `type Query {
      version: String
    }`,

    `type Mutation {
      version: String
    }`
  ],

  resolvers: {
    Query: {
      version: () => VERSION
    },

    Mutation: {
      version: () => VERSION
    }
  }
}

// Generate the GraphQL Schema
export default makeExecutableSchema(
  schemas.reduce((aggregate, schema) => {
    aggregate.typeDefs.push(schema.types)
    aggregate.resolvers = merge(aggregate.resolvers, schema.resolvers)

    return aggregate
  }, baseSchema)
)
