// reduce practices
const array1 = [1,2,3,4]
const reducer = (total, currentValue) => {
    console.log(`current: ${currentValue} total: ${total}`)
    return total+currentValue
}

console.log(`array1.reduce(reducer):${array1.reduce(reducer,0)}`)

//find min max avg {min:1, max:10, avg:6}
// const obj = {min:0,max:0,avg:0}
// obj['max'] = nums.reduce((x,y) => x>y?x:y) // max
// obj['min'] = nums.reduce((x,y) => x<y?x:y) // min
// obj['avg'] = (nums.reduce((x,y) => x+y))/nums.length // avg
// console.log(obj)

const nums = [1,5,8,10]
function minMaxAvg(arr) {
    return {
        min: arr.reduce((min, currentValue) => min>currentValue?min:currentValue),
        max: arr.reduce((max, currentValue) => max<currentValue?max:currentValue),
        avg: (arr.reduce((avg, currentValue) => avg+currentValue))/arr.length
    }
}
console.log(minMaxAvg(nums))