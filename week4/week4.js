//primitive type array
const values = [5, 10, 15, 20]
const x = [100, 200, 300]
const nums = [...x, 1, 3, ...values]
//[100,200,500,1,3,5,10,15,20]
console.log(nums)
//change value of nums
nums[0] = 555
console.log(nums)
console.log(x)

//object type array
const students = [
  { id: 665000123, name: 'Somchai' },
  { id: 665000045, name: 'TonPee' }
]

const alumniStudents = [...students] //[refAddress, refAddress]
alumniStudents[0].id = 9999999
console.log(students)
console.log(alumniStudents)

//spread on array
const str = 'hello world'
console.log([...str])

