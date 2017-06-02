// Dependencies
import { Context } from '../../'

// Resolvers
export default {
  Query: {
    auth (
      _root: undefined,
      { email, password }: { email: string, password: string },
      { stores }: Context
    ) {
      const token = stores.auth.authenticate(email, password)

      return { token }
    }
  }
}
