// Dependencies
import { Context } from '../../'

// Resolvers
export default {
  Query: {
    roles (_root: undefined, _args: undefined, { stores }: Context) {
      return stores.role.getRoles()
    }
  }
}
