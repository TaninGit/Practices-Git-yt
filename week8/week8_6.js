const array14 = [1,30,4,21,10000]
array14.sort()
console.log(array14)

const array2 = [1,30,4,21,10000]
console.log(array2.sort((a,b) => a-b))

const students = [
    { id: 665000101, name: 'Somchai' },
    { id: 665000131, name: 'ann' },
    { id: 665000144, name: 'Pichit' }
]
console.log(
    "stuudentSOrted",
    students.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    )
  );