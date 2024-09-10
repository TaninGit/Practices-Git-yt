class Point {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    distance (anotherPoint) {
        return Math.sqrt((this.x-anotherPoint.x) ** 2 + (this.y - anotherPoint.y) ** 2)
    }
}

const p1 = new Point(10,30)
const p2 = new Point(50,100)
console.log(p1.distance(p2))

class Person {
    constructor(id,name){
        this.id = id
        this.name = name
    }
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    toString(){
        return `id: ${this.id}, Name: ${this.name}`
    }
}

const p3 = new Person(1001,"Somchai")
const p4 = new Person(1002,"Somjai")
const p5 = new Person(1003,"Jaidee")
console.log(`[person 1] ${p3.toString()}`) //[person 1] id: 1001, Name: Somchai
console.log(`[person 2] ${p4.toString()}`)//[person 2] id: 1002, Name: Somjai
console.log(`[person 3] ${p5.toString()}`)//[person 3] id: 1003, Name: Jaidee

const s1 = Object.create(p3)
console.log(s1)
console.log(s1.id)
console.log(s1.name)

s1.id = 66130500034
s1.name = "Tomas Act."
console.log(s1)
console.log(s1.id)
console.log(s1.name)
console.log(s1.hasOwnProperty('name')) //true
console.log(s1.hasOwnProperty('id')) //true

const mail = {
    sender: { firstname: 'Somchai', lastname: 'Dee' },
    subject: 'Wake up'
  }
  
console.log(mail.sender.firstname)
console.log(mail.sender['firstname'])
console.log(mail['sender']['firstname'])
  //add a new property name 'fullname' and assign firstname and lastname to fullname
mail.sender.fullname = mail.sender.firstname + ' ' + mail.sender.lastname
console.log(mail.sender)