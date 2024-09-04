const car = {make:"Honda", model:"Civic LX", year:2018}
console.log(car)
car.year = 2024
console.log(car)
delete car.model
console.log(car)

for (let key in car) {
    console.log(car[key])
}