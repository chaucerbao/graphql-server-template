interface Arguments {
  id: number
}

export default {
  Query: {
    user (_root: undefined, { id }: Arguments) {
      return {
        id,
        email: 'a@b.cd'
      }
    }
  }
}
