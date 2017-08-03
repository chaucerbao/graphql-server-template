// Dependencies
import { Context } from '../../'

// Resolvers
export default {
  Query: {
    user(_root: undefined, { id }: { id: number }, { stores }: Context) {
      return stores.user.getUser(id)
    }
  },

  User: {
    roles(user: { id: number }, _args: undefined, { stores }: Context) {
      return stores.role.getRolesForUser(user.id)
    }
  }
}
