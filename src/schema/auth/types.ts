export default `
  extend type Query {
    auth(email: String!, password: String!): JwtToken
  }

  type JwtToken {
    token: String
  }
`
