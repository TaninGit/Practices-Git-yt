// Types, Values, and Variables
let say = "Hello World!"
const nubmer = 66034
var bool = true

console.log(say)
console.log(nubmer)
console.log(bool)

let my_num = 200
let my_name = my_num + "Tanin"
my_name = my_name + "Kaoaian"

console.log(my_name)
console.log(typeof(my_name))

console.log(my_name)

// Types, Values, and Variables

let num1 = 5
let num2 = '5'

console.log(num1 == num2) //true
console.log(num1 === num2) //false

let count = 10

while(count >= 1){
    console.log("I LOVE YOU")
    count--
}

// Function

function greet(name) {
    return "Hello " + name
}

console.log(greet("Tanin"))

function multiply(num1,num2){
    return num1 * num2
}

console.log(multiply(3,4))

// function add(num1,num2){
//     return num1+num2
// }

add = (num1,num2) => num1 + num2
console.log(add(5,5))

operate = (num1,num2,oper) => oper(num1,num2)

add = (num1,num2) => num1+num2
minus = (num1,num2) => num1-num2
multi = (num1,num2) => num1*num2
divide = (num1,num2) => num1/num2

console.log("Add: " + operate(5,5,add))
console.log("Minus: " + operate(5,5,minus))
console.log("Multiply: " + operate(5,5,multi))
console.log("Devide: " + operate(5,5,divide))

// Arrays and method

let number = [1,2,3,4,5]
number.push(6)
console.log("Before " +  number)
number.pop()
console.log("After " + number)

let arr_num = [1,2,3,4,5,6,7,8,9]
let double = arr_num.map(function(num) {
    return num + num
})

console.log("double: " + double)

let numbers = [1,2,3,4,5,6,7,8,9]

let evennumbes = numbers.filter(function(num) {
    return num%2 === 0
})

console.log("evennumbes: " +evennumbes)

let number_reduce = [1,2,3,4,5,6,7,8,9]

let suma = number_reduce.reduce(function(total,num){
    return total + num
})

console.log("sumation: " + suma)