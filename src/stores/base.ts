// Dependencies
import { Stores, Context } from './'

// Store
class BaseStore {
  _stores: Stores;
  _context: Context;

  constructor (stores: Stores, context: Context) {
    this._stores = stores
    this._context = context
  }
}

// Exports
export default BaseStore
