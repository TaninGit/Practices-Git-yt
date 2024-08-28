// binary -> Decimal (loop for)
function binaryToDecimal_01 (binaryString){
    let number = binaryString.split('')
    let result = 0
    for(let i=0; i<number.length; i++){
        result += Number(number[i])*Math.pow(2,number.length-(i+1))
    }
    return result
}

// binary -> Decimal (parseInt)
console.log(binaryToDecimal_01("1101"));

function binaryToDecimal_02(binaryString) {
    return parseInt(binaryString,2)
}

console.log(binaryToDecimal_02("1101"))