// 1.create object by literals
const person = {
    id:1,
    title:'untitled'
}
console.log(person) // {id: 1, title: 'untitled'}

// 2.create object by constructor function
function ObjectFactory(id,title='untitled'){
    this.id = id
    this.title = title
    this.email = 'No Email naja'
}
const obj01 = new ObjectFactory(1)
const obj02 = new ObjectFactory(2)
console.log(obj01.id) // 1
console.log(obj02.id) // 2
console.log(obj01.title) // untitledz
console.log(obj01.email) // No Email naja

// 3.create object by class
class Student{
    constructor(id, name='no name', email='no email'){
        this.id = id
        this.name = name
        this.email = email
    }
    getId(){
        return this.id
    }
}

const std01 = new Student(1234, 'Tanin Kaoaian')
const std02 = new Student(1235, 'Laura EiEi', 'laura0017@gmail.com')
console.log(std01) //Student {id: 66130500034, name: 'Tanin Kaoaian', email: 'no email'}
console.log(std02) //Student {id: 1235, name: 'Laura EiEi', email: 'laura0017@gmail.com'}
console.log(std01.getId())// 66130500034
console.log(std01.toString()) //[object Object] บรรพบุรุษมันมี Prototype ชื่อนี้ โปรแกรมเลยมองว่ามันไม่ Error
console.log(std01.isPrototypeOf()) //ไม่มีชื่อ Method นี้ใน function แต่สามารถรันโดยไม่ติด Error เพราะ บรรพบุรุษ Object มันสร้าง prototype ชื่อนี้อยู่แล้ว Object.prototype.isPrototypeOf()

const a = {}
console.log(a.toString()) //[object Object]
console.log(Student.prototype) //{constructor: ƒ, getId: ƒ}
Object.prototype.toString = 'Orere Orara'
console.log(a.toString) //Orere Orara

class Product {
    constructor(id, price, stock){
        this.id = id
        this.price = price
        this.stock = stock
    }
    getPrice(){
        return this.price
    }
}
const p1 = new Product(101,500,17)
console.log(p1) // Product { id: 101, price: 500, stock: 17 }
console.log(Product.prototype) // {}
console.log(p1.__proto__) // {} (__proto__ โคตรเก่าไม่นิยมใช้)
console.log(Product.prototype === p1.__proto__) // true

// 4.Object.create()

const p2 = new Product(102,250,23) // Create an object as product
const x = Object.create(p2)
console.log(x) // Product {}
console.log(x.id) // 102
console.log(x.price) // 250
console.log(x.stock) // 23
console.log(x.__proto__) // Product { id: 102, price: 250, stock: 23 }