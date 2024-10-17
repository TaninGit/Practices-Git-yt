function switchItUp(number) {
  let count = number;
  const storage = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  };
  return storage[number];
}
console.log(switchItUp(0)); //Zero
console.log(switchItUp(1)); //One
console.log(switchItUp(2)); //Two
console.log(switchItUp(3)); //Three
console.log(switchItUp(4)); //Four
console.log(switchItUp(5)); //Five
console.log(switchItUp(6)); //Six
console.log(switchItUp(7)); //Seven
console.log(switchItUp(8)); //Eight
console.log(switchItUp(9)); //Nine

const name = 'Tanin';
const greeting0 = (name) => 'Hello ' + name;
const greeting2 = (name) => 'Hello ' + name;
const greeting1 = (name) => `Hello ${name}`;
console.log(greeting0(name)); //Hello Tanin
console.log(greeting1(name)); //Hello Tanin
console.log(greeting2(name)); //Hello Tanin

// ---- Practices 01

getCharacterInfo = (message) => {
  return {
    length: message.length,
    firstCharacters: message.substring(0, 1),
    lastCharacters: message.substring(message.length - 1, message.length),
  };
};

console.log(getCharacterInfo('Java Script')); //{length: 11, firstCharacters: 'J', lastCharacters: 't'}
console.log(getCharacterInfo('Hello World')); //{length: 11, firstCharacters: 'H', lastCharacters: 'd'}

// ---- Practices 02

checkWord = (message, check) => message.includes(check);

console.log(checkWord('I love JavaScript', 'JavaScript')); //true
console.log(checkWord('I love JavaScript', 'Python')); //false

const text = 'Operator';
console.log(text[0]); //O
console.log(text[text.length - 1]); //r

// ---- Practices 03
replaceWord = (text, text_find, text_replace) =>
  text.replace(text_find, text_replace);

console.log(replaceWord('I love JavaScript', 'JavaScript', 'TypeScript')); //I love TypeScript

// ---- Practices 04
function capitalizeFirstLetter(text) {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeFirstLetter('i love javascript python and java')); //I Love Javascript Python And Java

// ---- Practices 05
checkDataType = (data) => typeof data;

console.log(checkDataType('Hello')); //string
console.log(checkDataType(42)); //number
console.log(checkDataType(true)); //boolean
console.log(checkDataType(null)); //object
console.log(checkDataType(() => {})); // function

// ---- Practices 06
checkCondition = (data) => data?'Truthy':'Falsy'

console.log(checkCondition(1)); //true
console.log(checkCondition(0)); //false
console.log(checkCondition(null)); //false
console.log(checkCondition(undefined)); //false
console.log(checkCondition("Hello")); //true
console.log(checkCondition([])); //true
console.log(checkCondition({})); //true

