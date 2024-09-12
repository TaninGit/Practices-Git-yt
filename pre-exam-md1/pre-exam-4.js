class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log("Hello my name is " + this.name)
    }
    my_age(){
        console.log( this.age + " Year old")
    }
}

const p1 = new Person("Tomas",34)
p1.greet()
p1.my_age()


let point = {x:10, y:20}
let copy_point = point
copy_point["x"] = 30
console.log(point)

const arr = [1,2,3,4,5]
const copy_arr = arr
copy_arr[0] = 5555
console.log(arr)

let guest03 = "Guest"
function sayHello(name){
    let userName = name ?? guest03
    return "Hello " + userName
}

console.log(sayHello())

console.log(Math.pow(2,5))

let fruits = ["Apple","Banana"]

for(let fruit of fruits){
    console.log(fruit.length)
}

let numbers = [1,2,3,4,5,6,7]

for(let number in numbers){
    console.log(numbers[number])
}