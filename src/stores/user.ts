// Dependencies
import BaseStore from './base'
import {QueryBuilder} from 'knex'

// Store
class UserStore extends BaseStore {
  getUser (id: number): QueryBuilder {
    return this._context.db.first('id', 'email').from('users').where({id})
  }
}

// Exports
export default UserStore
