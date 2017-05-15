// Dependencies
import { router, get, post } from 'microrouter'

// Configuration
import config from './config'
import schema from './schema'

// Routes
import auth from './routes/auth'
import graphql from './routes/graphql'

// Server
export default router(
  post('/auth', auth({ secret: config.secret })),
  get('/*', graphql({ config, schema })),
  post('/*', graphql({ config, schema }))
)
