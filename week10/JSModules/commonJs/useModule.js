// 1.
const {addTodo, getTodos} = require('./todoManagement.js')
console.log(addTodo('grading exam'))
console.log(getTodos())

// 2.
const todoManager = require('./todoManagement.js')
console.log(todoManager.addTodo('grading exam'))
console.log(todoManager.getTodos())