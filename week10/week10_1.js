function echo(msg = 'hello'){
    return msg
}
console.log(echo(null)) //null
console.log(echo(undefined)) //hello

// Basic Destructuring
const nums = [1,3,5,7]
const [a,b] = nums
console.log(a) // 1
console.log(b) // 3

// Basic Destructuring
const product = {id:1991, price:500}
const {price} = product
console.log(price)

// Destructure array
function x([n1],[n2]){
    return n1+n2
}
const number = [1,3,5,7,9]
const fruit = ['apple','banana']
console.log(x(number,fruit))

// Destructuring Object จะแคร์ชื่อ ถ้าชื่อไม่เป๊ะจะไม่แสดงออกมา
function getPrice({price}){
    return price
}
console.log(getPrice({productId: 1001, productPrice: 50})) //undefined

//66130500034
//Tanin Kaoaian (7ray)
function getId({id:{categoryId,productId}}){
    return categoryId+pr //cat011001
}
console.log(getId(
    {id:{categoryId:'cat01',productId:1001}, price:50}
))