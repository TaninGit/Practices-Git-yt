// Practices 
function extractAndRename(obj) {
    return {fullname: obj['name'], yearOld: obj['age']}
}
    
console.log(extractAndRename({name:'John', age: 25, city:"new york"}))
console.log(extractAndRename({name:'John', age: 30}))

// Practices
function mergeAndDestructure(obj1,obj2){
const result = {...obj1,...obj2}
return {fullname: result['name'], yearOld: result['age']}
}
console.log(mergeAndDestructure({name:'John'}, { age: 30,city:"USA"}))
console.log(mergeAndDestructure({name:'John', age: 25}, {city:"new york"}))