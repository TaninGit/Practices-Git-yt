let nums
const values=nums ?? []
values[0]=555
console.log(values)//?
//output: [ 555 ]

let score=1
let unit= score>=2?'points':'point'
console.log(`${score} = ${unit}`)
//output: 2 points