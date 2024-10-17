class Todo {
    static runningId = 1
    constructor(desc) {
      this.id = Todo.runningId++
      this.description = desc
    }
    getTodo() {
      return this
    }
    setDescription(desc) {
      this.description = desc
    }
  }
  // module.exports = Todo
    module.exports = {Todo}
  const todo1 = new Todo('read book')
  const todo2 = new Todo('shopping')
  console.log(todo1.getTodo())
  todo2.setDescription('online shopping')
  console.log(todo2.getTodo())