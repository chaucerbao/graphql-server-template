// Dependencies
import * as Knex from 'knex'
import config from '../config'

// Individual stores
import AuthStore from './auth'
import RoleStore from './role'
import UserStore from './user'

// Interfaces
export interface Stores {
  auth: AuthStore,
  role: RoleStore,
  user: UserStore
}

export interface Context {
  db: Knex
}

const context : Context = {db: Knex(config.knex)}
const stores : Stores = {
  auth: new AuthStore(this, context),
  role: new RoleStore(this, context),
  user: new UserStore(this, context)
}

// Exports
export default stores
