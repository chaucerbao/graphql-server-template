export default `
  extend type Query {
    user(id: Int!): User
  }

  type User {
    id: ID!
    email: String
  }
`
