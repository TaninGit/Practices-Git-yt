// closureFunction
const value = 10
function x(num) {
  const a = 1
  //   console.log(b) //error: b is not defined
  //x is an outer function
  function y() {
    //closure function
    const a = 'functional programming'
    const b = 'js'
    //y is an inner/nested function
    return num * value + a + b
  }
  //   return y() //is not equivalent to return y
  return y
}
// console.log(x(5)) //51
//closure usage
const fn = x(5)
console.log(fn()) //50functional programmingjs

const fn2 = x(2)
console.log(fn2()) //20functional programmingjs