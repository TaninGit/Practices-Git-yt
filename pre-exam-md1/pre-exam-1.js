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

console.log("summation: " + suma)

// Create Array with Constructor

const values = new Array(1)
values[0] = true
console.log(values)
console.log(values.length)

const x = new Array(1,3,5,7)
console.log(x)
console.log(x.length)

const y = new Array(0)
console.log(y)
console.log(y.length)

// Create Array with Of

let arr = Array.of("Tanin",true,234)
console.log(typeof(arr))

// create array 4 types

let arr1 = [1,2,3,4,5] // Basic
console.log(arr1)

let arr2 = Array.of(1,2,3,4,5) // Type of
console.log(arr2)

let arr3 = new Array(1,2,3,4,5) // New Array
console.log(arr3)

let arr4 = [...arr1] // Spread operator
console.log(arr4)

// Add elements in array don't worry about array sizes
let arr5 = ["Hello"]
arr5[1] = "world"
console.log(arr5)

// Delete elements of array
let arr6 = Array.of(1,2,3,4,5,6,7,8,9)
delete arr6[4]
console.log(arr6) //[ 1, 2, 3, 4, <1 empty item>, 6, 7, 8, 9 ]
console.log(arr6.length) //9
/* 
ลบ Element ใน Array แล้วให้ข้อมูลแต่ละตัว Gap มาข้างหน้า

ใช้ Slice(เริ่มต้นที่เท่าไหร่, จบที่เท่าไหร่(แต่จะม่เกินตำแหน่งนั้น)) เช่น a = [1,2,3,4,5] ==> a.slice(0,4) | a = [1,2,3,4]

function delete_index(arr,index){
    for(i=index; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    return arr.slice(0,arr.length-1)
} 

โคตรง่ายใช้ Spice 
splice(index, 1) ลบค่าที่ตำแหน่ง index ในอาเรย์ arr และลบจำนวน 1 ตัว
function ฟังก์ชันนี้ใช้เครื่องหมายจุลภาค (,) ซึ่งทำให้สามารถเรียก arr.splice() และคืนค่า arr ในบรรทัดเดียวได้ 
*/

delete_index = (arr,index) => (arr.splice(index,1),arr)

let arr7 = [1,2,3,4,5,6,7,8,9]
console.log(`Before:  ${arr7}`)
console.log(`Before_size:  ${arr7.length}`)
let arr7_result = delete_index(arr7,5)
console.log(`After:  ${arr7_result}`)
console.log(`After_size:  ${arr7_result.length}`)