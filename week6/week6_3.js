const square01 = {
    id: 1,
    side: 4,
    area: function(){
        return this.side * this.side
    },
    compareTo: function (anotherSquare){
        return this.id === anotherSquare.id
    }
}

const square2 = {id:1}
console.log(square01.compareTo(square2)) //true

const square02 = {
    id:1,
    side:4
}

const keys = Object.keys(square02) // [ 'id', 'side' ]
const values = Object.values(square02) // [ 1, 4 ]
const entries = Object.entries(square02) // [ [ 'id', 1 ], [ 'side', 4 ] ]
console.log(keys)
console.log(values)
console.log(entries)