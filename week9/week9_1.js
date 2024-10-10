//function concept and higher order function
const echo = (x) => x //assign function to variable "echo"
const y = echo //assign reference to y
console.log(y) // print function (x) => x
console.log(y(10)) // 10
console.log(typeof(y)) // function

// Function type => Nested function
function x(num){
    function y(){
        return num*2
    }
    return y() // is not equivalent to return y
}
console.log(x(5)) // 10
console.log(y()) // ไม่รู้จัก undefined