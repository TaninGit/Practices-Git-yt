// every() practices
// some() practices
const students = [
    {
      id: 1,
      absent: true
    },
    {
      id: 2,
      absent: false
    },
    {
      id: 3,
      absent: true
    },
    {
      id: 4,
      absent: false
    },
    {
      id: 5,
      absent: false
    }
  ]
// practices #1
function findAbsentId(student){ //return array of absent id
  return student.filter( x => x.absent === true ).map(student => student.id)
}
// practices #2
function isAllAbsent(student){ //return boolean true or false
  return student.every( x => x.absent === true)
}

console.log(findAbsentId(students))

console.log(isAllAbsent(students))

