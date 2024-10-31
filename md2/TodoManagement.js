const Todo = require('./todo.js')
function TodoManagement(){
    const todos = []
    function addTodo(desc){return todos.push(new Todo(desc))}

    function findTodo(searchId){return todos.find((todo) => todo.id === searchId)}

    function findIndexTodo(searchId){return todos.findIndex((todo) => todo.id === searchId)}

    function removeTodo(removeId){todos.splice(removeId,1)}

    function getTodos(){return todos}

    return {addTodo,findTodo,findIndexTodo,removeTodo,getTodos}

}

const t1 = TodoManagement()
console.log(t1.addTodo("Hello-1"))
console.log(t1.addTodo("Hello-2"))
console.log(t1.addTodo("Hello-3"))
console.log(t1.getTodos())
console.log(t1.findTodo(1))
t1.removeTodo(2)
console.log(t1.addTodo("Tanin"))
console.log(t1.getTodos())