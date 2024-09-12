function getRandomElement(arr){
    if(arr.length === 0){
        return null
    }else{
        let random_number = Math.floor(Math.random()*arr.length)
        return arr[random_number]
    }
}

console.log(getRandomElement([1, 2, 3, 4, 5])); // Outputs a random element from the array
console.log(getRandomElement(['apple', 'banana', 'cherry'])); // Outputs a random fruit
console.log(getRandomElement([])); // Outputs null

