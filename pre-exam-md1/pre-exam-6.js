
  function getRandomHexColor() {
    let random_number = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let result_random = ['#'] // [#,o,o,o,o,o,o]
    for(let i=1; i<7; i++){result_random[i] = random_number[Math.floor(Math.random()*random_number.length)]}   
    return result_random.join('') 
  }
  
  // Example usage:
  console.log(getRandomHexColor()); // Outputs a random hex color like #1A3B5F
  console.log(getRandomHexColor()); // Outputs another random hex color like #D4E6A1

  function generateRandomPassword(length){
    let random_password = [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
        'U', 'V', 'W', 'X', 'Y', 'Z',0,1,2,3,4,5,6,7,8,9,'@','#','$','%','&','!','_']
    let result_password = []

        for(let i=0; i<length; i++){
            result_password[i] = random_password[Math.floor(Math.random() * random_password.length)]
        }
        return result_password.join('')
  }

console.log(generateRandomPassword(10));  // Outputs a random 8-character password
console.log(generateRandomPassword(10)); // Outputs a random 12-character password
console.log(generateRandomPassword(15));  // Outputs a random 8-character password
console.log(generateRandomPassword(15)); // Outputs a random 12-character password
