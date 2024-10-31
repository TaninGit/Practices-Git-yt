function visitor(unit){
    let visit = unit
    function getVisit(){
        return visit
    }
    function incomeVisit(){
        return ++visit
    }
    return {getVisit,incomeVisit}
}

const x = visitor(100)
console.log(x)
console.log(x.getVisit(), x.incomeVisit())
console.log(x.getVisit())

const cart = [
    { item: 'Apple', price: 30 },
    { item: 'Banana', price: 10 },
    { item: 'Mango', price: 25 }
];

const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(totalPrice); // Output: 65

const numbers = [15, 30, 7, 50, 22];

const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);  // ค่าเริ่มต้นคือค่าตัวแรกของ array

console.log(maxNumber); // Output: 50