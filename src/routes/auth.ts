// Dependencies
import { IncomingMessage, ServerResponse } from 'http'
import { json, send } from 'micro'
import * as jwt from 'jsonwebtoken'

// Route handler
export default ({ secret }: Options) => {
  return async (req: IncomingMessage, res: ServerResponse) => {
    const { email, password } : Credentials = await json(req)

    if (email === password) {
      const token = jwt.sign({ viewer: { id: 5 } }, secret, { expiresIn: '2h' })

      send(res, 201, { token })
    }

    send(res, 401)
  }
}

// Interfaces
interface Options {
  secret: string
}

interface Credentials {
  email: string,
  password: string
}
