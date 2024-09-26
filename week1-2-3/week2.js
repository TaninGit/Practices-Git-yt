// Practices 1 
function detailedType(value){
    if(Array.isArray(value)){
        return "array"
    }else if(value === null){
        return "null"
    }else{
        return typeof(value)
    } 
}

console.log(detailedType('hello'))
console.log(detailedType(123))
console.log(detailedType(true))
console.log(detailedType({}))
console.log(detailedType([]))
console.log(detailedType(null))
console.log(detailedType(function() {}))
console.log(detailedType(undefined))
console.log(detailedType(Symbol()))

// Practices 2
function isValidPassword(password){

    const password_big = password.toUpperCase()
    const password_small = password.toLowerCase()

    const arr = password.split('')
    const arr_big = password_big.split('')
    const arr_small = password_small.split('')

    let big_count = 0;
    let small_count = 0;
    let number_count = 0;

    if(password.length >= 8){}
    else{return false}

    for(i=0; i<password.length; i++){
        if(arr[i] === arr_big[i] && isNaN(arr[i])){big_count += 1}
        if(arr[i] === arr_small[i] && isNaN(arr[i])){small_count += 1}
        if(false === isNaN(arr[i])){number_count += 1}
    }

    if(big_count>0 && small_count>0 && number_count>0){return true}
    else{return false}
}

console.log(isValidPassword('Password123'))
console.log(isValidPassword('pass123'))
console.log(isValidPassword('PASSWORD123'))
console.log(isValidPassword('Pass123'))