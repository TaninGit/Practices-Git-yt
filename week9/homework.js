const studentScores = [
    {name:'Alice', score: 85},
    {name:'Bob', score: 92},
    {name:'Charlie', score: 68},
    {name:'David', score: 55},
    {name:'Eve', score: 78}
]

function getPassingNames(student_obj) {
    return student_obj.filter((student) => student.score >= 70).map((student) => student.name.toUpperCase())
}

const passingNames = getPassingNames(studentScores)
console.log(passingNames)