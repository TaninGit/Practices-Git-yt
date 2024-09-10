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
console.log(typeof(['a','v']))

function greet1(name, greeting) {
    if(greeting === undefined){
        return "Hello"+","+name
    }else{
        return greeting+","+name
    }
}

greet2 = (name2,greeting) => {
    return say = greeting === undefined ? "Hello," + name2: greeting+","+name2
}

function greet3(name, greeting) {
    return `${greeting ?? 'Hello'}, ${name}`;
}
console.log(greet3("Tanin",undefined))
console.log(greet3("Tanin",null))
console.log(greet3("Tanin","Hi"))
console.log(greet3("Laura"))