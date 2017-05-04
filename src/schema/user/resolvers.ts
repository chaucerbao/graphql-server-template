export default {
  Query: {
    user (root: undefined, {id}: {id: number}) {
      return {
        id,
        email: 'a@b.cd'
      }
    }
  }
}
