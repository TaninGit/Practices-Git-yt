const words = ['cat', 'ant', 'dog', 'bird', 'pig', 'bear']
// words.fill(null)//[null,null,...null]
// words.fill(0, 2, 3) //['cat', 'ant', 0, 'bird', 'pig', 'bear']

console.log(words.reverse()) //[ 'bear', 'pig', 'bird', 'dog', 'ant', 'cat' ]
//1. array includes()
console.log(words.includes('ig')) //false
//2. string includes() is similary contains, but not equal ===
const word = 'today'
console.log(word.includes('day')) //true
console.log(word.includes('Day')) //false because case sensitive
console.log(word.includes('today')) //true