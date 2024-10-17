const words = ['ant', 'pig']
words.pop() //['ant'] เอาด้านหลังออก
console.log(words)
words.unshift('bat', 'cat') //['bat','cat','ant'] เพิ่มด้านหน้า
console.log(words)
words.push('dog', 'bird') //['bat','cat','ant', 'dog', 'bird'] เพิ่มด้านหลัง
console.log(words)
words.shift() //['cat','ant', 'dog', 'bird'] เอาด้านหน้าออก
//output words
console.log(words)