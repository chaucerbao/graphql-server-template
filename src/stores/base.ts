// Dependencies
import { Context } from './'

// Store
class BaseStore {
  _context: Context

  constructor(context: Context) {
    this._context = context
  }
}

// Exports
export default BaseStore
