function visitor(initakValue){
    let visit = initakValue
    function getVisitor(){
        return visit
    }
    function incrementVisit(){
        visit += 1
    }
    function decrementVisit(){
        visit -= 1
    }
    return {getVisitor: getVisitor,
        incrementVisit: incrementVisit,
        decrementVisit
    } //object
}

const x = visitor(100)
console.log(x) //[Function: getVisitor]
console.log(x.getVisitor()) // 100
console.log(x.incrementVisit()) //undefined
console.log(x.getVisitor()) // 101
console.log(x.decrementVisit()) //undefined
console.log(x.getVisitor()) // 100
