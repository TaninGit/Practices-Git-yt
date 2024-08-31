function getStringLengths(arr){
    const arr_storage = []
    for(let i of arr)arr_storage.push(i.length)     
    return arr_storage
}

console.log(getStringLengths(['apple','banana','kiwi','orange']))
console.log(getStringLengths(['hello','world']))
console.log(getStringLengths(['chatGPT','AI']))

// function combineArray(arr1,arr2){
//     return [...arr1,...arr2]
// }

combineArray = (arr1,arr2) => [...arr1,...arr2]

console.log(combineArray([1,2],[3,4]))
console.log(combineArray(['a','b'],['c','d']))
console.log(combineArray([],[1,2,3]))