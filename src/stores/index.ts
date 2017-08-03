// Dependencies
import * as Knex from 'knex'
import config from '../config'

// Individual stores
import AuthStore from './auth'
import RoleStore from './role'
import UserStore from './user'

// Interfaces
export interface Stores {
  auth: AuthStore
  role: RoleStore
  user: UserStore
}

export interface Context {
  db: Knex
}

const context: Context = { db: Knex(config.knex) }
const stores: Stores = {
  auth: new AuthStore(context),
  role: new RoleStore(context),
  user: new UserStore(context)
}

// Exports
export default stores
