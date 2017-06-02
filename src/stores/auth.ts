// Dependencies
import BaseStore from './base'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import config from '../config'

// Interfaces
interface Payload {
  id: number
}

// Store
class AuthStore extends BaseStore {
  async authenticate (email: string, password: string): Promise<string> {
    const user = await this._context.db
      .first('id', 'password')
      .from('users')
      .where({ email })

    if (user && bcrypt.compareSync(password, user.password)) {
      const payload : Payload = { id: user.id }
      const token = jwt.sign(payload, config.secret, {
        expiresIn: '2h'
      })

      return token
    }

    return ''
  }

  decode (token: string): Payload {
    return jwt.verify(token, config.secret)
  }
}

// Exports
export default AuthStore
