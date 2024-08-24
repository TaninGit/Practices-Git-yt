// Factorial Practices
function factorial(num){
    let sum = 1
    for(i=num; i>0; i--){
        sum *= i
    }
    return sum
}

console.log(factorial(5))

// Palindrome Practices
function isPalindrome01(str){

    let reversed = str.split('').reverse().join('')
    if(str === reversed) return true
    else return false

}

console.log(isPalindrome01("madam"))
console.log(isPalindrome01("Hello"))

// Palindrome Practices but big&small char is the same
function isPalindrome02(str){

    let reversed = str.toUpperCase().split('').reverse().join('')
    if(str.toUpperCase() === reversed) return true
    else return false

}

console.log(isPalindrome02("Madam"))

// FindMax and Min Practices 
function findMax(arr){
    let max = Number.MIN_VALUE
    for(i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([33,11,4,1,5,9]))

function countCharacters(str) {
    let result = {}
    for(char of str){
        if(result[char]){
            result[char]++
        }else{
            result[char] = 1
        }
    }
    return result
}

console.log(countCharacters("Hello Button ton ton"))