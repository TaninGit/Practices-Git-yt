function switchItUp(number) {
    let count = number
    const storage = {
        0:"Zero",
        1:"One",
        2:"Two",
        3:"Three",
        4:"Four",
        5:"Five",
        6:"Six",
        7:"Seven",
        8:"Eight",
        9:"Nine"
    }
    return storage[number]
}
console.log(switchItUp(0));
console.log(switchItUp(1));
console.log(switchItUp(2));
console.log(switchItUp(3));
console.log(switchItUp(4));
console.log(switchItUp(5));
console.log(switchItUp(6));
console.log(switchItUp(7));
console.log(switchItUp(8));
console.log(switchItUp(9));

const name = 'Tanin'
const greeting0 = (name) => 'Hello ' + name
const greeting2 = (name) => "Hello " + name
const greeting1 = (name) => `Hello ${name}`
console.log(greeting0(name))
console.log(greeting1(name))
console.log(greeting2(name))

// ---- Practices 01

getCharacterInfo = (message) => {
    return {length:message.length, firstCharacters: message.substring(0,1), lastCharacters: message.substring(message.length-1,message.length)}
}

console.log(getCharacterInfo("Java Script"))
console.log(getCharacterInfo("Hello World"))

// ---- Practices 02

checkWord = (message,check) => message.includes(check)

console.log(checkWord("I love JavaScript", "JavaScript"))
console.log(checkWord("I love JavaScript", "Python"))

const text = "Operator"
console.log(text[0])
console.log(text[text.length-1])