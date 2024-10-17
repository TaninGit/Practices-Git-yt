const words = ['cat','ant','dog','bird','pig','bear']
words.splice(1,2) //delete ['ant','dog']
console.log(words)
words.splice(0,1,'dinosour','fish') //add ['dinosour','fish']
console.log(words)
words.splice(0,-1,"Hippo") //add ['Hippo']
console.log(words)