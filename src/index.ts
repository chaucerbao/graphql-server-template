// Dependencies
import { IncomingMessage, ServerResponse } from 'http'
import { microGraphql } from 'apollo-server-micro'
import { send } from 'micro'
import stores, { Stores } from './stores'
import schema from './schema'

// Interfaces
export interface Context {
  stores: Stores
  viewer: {}
}

// Server
export default async (req: IncomingMessage, res: ServerResponse) => {
  const context: Context = {
    stores,
    viewer: {}
  }

  // Decode JWT
  const { authorization } = req.headers
  if (authorization) {
    const token =
      (authorization instanceof Array ? authorization[0] : authorization)
        .split(' ')
        .pop() || undefined

    if (token) {
      try {
        const user = stores.auth.decode(token)
        const viewer = await stores.user.getUser(user.id)
        viewer.roles = await stores.role.getRolesForUser(user.id)
        context.viewer = viewer
      } catch (err) {
        return send(res, 401, {
          error: err
        })
      }
    }
  }

  return microGraphql({
    schema,
    context
  })(req, res)
}
