// Destructuring practices

const title = {title_mov:"Salah clove", year:34}
const {title_mov:name,year:age} = title  // this is Destructuring
console.log(name) //Salah clove
console.log(age) //34

function extractAndRename(obj){
    const {name,age} = obj   // this is Destructuring
    return {name,age}
}
console.log(extractAndRename({name:"Tanin",age:20,dob:220304})) //{name: 'Tanin', age: 20}

// Destructing practices
const obj = {id:1234, title:'untitled', room:'cb2304', floor:3}
const {id,room,...otherProps} = obj //destructure + rest
console.log(id) //1234
console.log(room) //cb2304
console.log(otherProps) // {title: 'untitled', floor: 3}

const arr = [1,3,5,7,9]
const [m,n,...p] = arr //destructure + rest
console.log(m) //1
console.log(n) //3
console.log(p) //[5,7,9]

function sum(...number){ // rest
    let total = 0
    for(const num of number){
        total += num
    }
    return total
}
console.log(sum(1,2,3,4,5)) //15
