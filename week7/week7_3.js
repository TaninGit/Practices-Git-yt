// forEach() practices
function getFirstCharacter(color){
    const result = []
    color.forEach(
        (coly)=> result.push(coly.charAt(0).toUpperCase())
    )
    return result
}
const color = ['red','green','purple']
console.log(getFirstCharacter(color)) // ['R','G','P']

// filter() and map() practices
// [1,4,9,25,64,100]
//final result [4,64,100]
function findEvenPowNumbers(nums){
    const pow_number = nums.map( x => Math.pow(x,2))
    const even_number = pow_number.filter( x => x%2 === 0)
    return even_number
}

// short staement
findEvenPowNumbers = (nums) => (nums.map(x => Math.pow(x,2))).filter(x=>x%2===0)

const nums = [1,2,3,5,8,10]
console.log(findEvenPowNumbers(nums))
