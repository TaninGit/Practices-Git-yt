const arr = [1, 3, 5, 7]
delete arr[1]
console.log(arr) //[ 1, <1 empty item>, 5, 7 ]
console.log(arr.length) //4

const obj = { id: 1, name: 'unNamed' }
delete obj['id'] //delete property
console.log(obj) //{ name: 'unNamed' }
obj.email = 'unname@kmutt.ac.th' //adding a new property
console.log(obj) //{ name: 'unNamed', email: 'unname@kmutt.ac.th' }
obj.email = 'unEmail' //reassign property value
console.log(obj) //{ name: 'unNamed', email: 'unEmail' }