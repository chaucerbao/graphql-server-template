export default `
  extend type Query {
    roles: [Role]!
  }

  type Role {
    id: Int!
    name: String!
  }
`
