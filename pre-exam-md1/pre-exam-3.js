function way(min,max,obj){
    return obj(min, max)
}

function getRandomNumber01(min, max) {
    while(true){
        let random_result = Math.ceil(Math.random()*max)
        if(random_result >= min){
            return random_result
        }
    }
}

function getRandomNumber02(min, max) {
    return Math.floor(Math.random()*(max-min+1)) + min
}

console.log(way(50, 100, getRandomNumber01)); 
console.log(way(150, 200, getRandomNumber02));