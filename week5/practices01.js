const p1 = {x:10, y:100}
const p2 = {x:20, y:200}
console.log(p1)
console.log(p2)

function point(x, y){
    this.x = x
    this.y = y
}
const p3 = new point(10,100)
const p4 = new point(20,200)
console.log(p3)
console.log(p4)

const person = {personId:1001, firstName:"Tanin", lastName:"Kaoaian"}
const student = Object.create(person)

student.studentId = 1002

console.log("object: " + person)  
console.log("object: " + student)

console.log("studentId: " + student.studentId)
console.log("personId: " + student.personId)
console.log("firstname: " + student.firstName)
console.log("lastname: " + student.lastName)
