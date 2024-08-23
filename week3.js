// Practices 1 
function classifyNumber(num) {
    if(num>0){
        return 'positive'
    }else if (num<0){
        return 'negative'
    }else {
        return 'zero'
    }
}

// Practices 2
function countVowels(str){
    const arr_str = str.split('')
    let count = 0
    for(i=0; i<str.length; i++){
        switch (arr_str[i]){
            case 'a':
                count++
                break
            case 'e':
                count++
                break 
            case 'i':
                count++
                break
            case 'o':
                count++
                break
            case 'u':
                count++
                break                                              
        }
    }
    return count
}

// Practices 3
function isPrime(num) {

    if(num <= 0) return false
    if(num <= 3) return true
    if(num == 5) return true
    if(num == 7) return true

    if(num%2 === 0 || num%3 === 0 || num%5 === 0 || num%7 === 0){
        return false
    }else{
        return true
    }
} 

console.log(classifyNumber(5))
console.log(classifyNumber(-3))
console.log(classifyNumber(0))

console.log(countVowels('hello'))
console.log(countVowels('world'))
console.log(countVowels(''))

console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(17))