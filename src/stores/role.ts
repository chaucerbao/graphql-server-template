// Dependencies
import BaseStore from './base'
import { QueryBuilder } from 'knex'

// Store
class RoleStore extends BaseStore {
  getRoles(): QueryBuilder {
    return this._context.db.select('id', 'name').from('roles').orderBy('name')
  }

  getRolesForUser(userId: number): QueryBuilder {
    return this._context.db
      .select('id', 'name')
      .from('roles')
      .innerJoin('roles_users', 'roles.id', 'roles_users.role_id')
      .where({ user_id: userId })
      .orderBy('name')
  }
}

// Exports
export default RoleStore
