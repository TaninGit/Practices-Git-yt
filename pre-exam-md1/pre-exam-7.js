/* "uppercase": Converts the entire string to uppercase.
"lowercase": Converts the entire string to lowercase.
"capitalize": Capitalizes the first letter of each word in the string.
If the string is an empty, return an empty string.
If the formatType is invalid, an error 'Invalid format type' is thrown.
If an input is not a string, an error 'Input must be a string' is thrown. */

function stringFormatter (text, format){
    let command = format.toLowerCase();
    if(typeof(text) !== 'string'){
        throw new Error('Input must be a string')
    }

    if(command !== 'uppercase' && command !== 'lowercase' && command !== 'capitalize'){ 
        throw new Error('Invalid format type')
    }else{}

    if(text === ''){
        console.log(' ') 
    }

    if(command === 'uppercase'){
        return uppercase(text)
    }else if(command === 'lowercase'){
        return lowercase(text)
    }else if(command === 'capitalize'){
        return capitalize(text)
    }else{
        
    }
}

function uppercase(text){
    console.log(text.toUpperCase())
}
function lowercase(text){
    console.log(text.toLowerCase())
}
function capitalize(text){
    const arr = text.toLowerCase().split(' ') // [hello world]
    // console.log(arr)
    const result01 = [] // [H e l l o ]
    const result02 = []
    const brr01 = arr[0].split('') // [h e l l o]
    const brr02 = arr[1].split('') // [w o r l d]
    for(let i=0; i<arr.length; i++){
        // console.log(brr)
        if(i===0){
            for(k=0; k<brr01.length; k++){ // 5
                if(k === 0){
                    result01[k] = brr01[k].toUpperCase() // [H]
                }else{
                    result01[k] = brr01[k] //[e l l o]  => [H e l l o]
                }
            }
        }

        if(i===1){
            for(k=0; k<brr02.length; k++){ // 5
                if(k === 0){
                    result02[k] = brr02[k].toUpperCase() // [W]
                }else{
                    result02[k] = brr02[k] //[o r l d]  => [W o r l d]
                }
            }
        }
    }
    console.log(...result01 ,' ' , ...result02)
}


stringFormatter("hello world","uppercase") // "HELLO WORLD"
stringFormatter("hello world", "Uppercase") // "HELLO WORLD"
stringFormatter("HELLO WORLD", "lowercase") // "hello world"
stringFormatter("HELLO WORLD", "LOWERCASE") // "hello world"
stringFormatter("hello world", "capitalize") // "Hello World"
stringFormatter("hello world", "Capitalize") // "Hello World"
stringFormatter("hEllo woRld", "CAPITALIZE") // "Hello World"
stringFormatter('', 'uppercase') //''
stringFormatter('hello world', 'invalid') //'Invalid format type'
stringFormatter(12345, 'uppercase') //'Input must be a string'