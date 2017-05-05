// Dependencies
import {IncomingMessage, ServerResponse} from 'http'
import {send} from 'micro'
import {microGraphql} from 'graphql-server-micro'
import {assign} from 'lodash'
import {GraphQLSchema} from 'graphql'
import * as jwt from 'jsonwebtoken'
import * as Knex from 'knex'

// Route handler
export default ({config, schema}: Options) => {
  const context = {
    db: Knex(config.database)
  }

  return (req: IncomingMessage, res: ServerResponse) => {
    const {authorization} = req.headers
    let jwtPayload = {
      viewer: {}
    }

    if (authorization) {
      const token = authorization.split(' ').pop()

      try {
        jwtPayload = jwt.verify(token, config.secret)
      } catch (err) {
        return send(res, 401, {
          error: err
        })
      }
    }

    return microGraphql({
      schema,
      context: assign(context, {viewer: jwtPayload.viewer})
    })(req, res)
  }
}

// Interfaces
interface Options {
  config: {
    secret: string,
    database: Knex.Config
  },
  schema: GraphQLSchema
}
