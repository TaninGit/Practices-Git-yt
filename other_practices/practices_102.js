// // binary -> Decimal (loop for)
// function binaryToDecimal_01 (binaryString){
//     let number = binaryString.split('')
//     let result = 0
//     for(let i=0; i<number.length; i++){
//         result += Number(number[i])*Math.pow(2,number.length-(i+1))
//     }
//     return result
// }

// // binary -> Decimal (parseInt)
// console.log(binaryToDecimal_01("1101"));

// function binaryToDecimal_02(binaryString) {
//     return parseInt(binaryString,2)
// }

// console.log(binaryToDecimal_02("1101"))

// 66130500034 Tanin Kaoaian
const trackAttendance = (employees) => {
    let name = employees.name
    let attendance = employees.attendance
    let present = 0
    let absent = 0
    for(let i=0; i<attendance.length; i++){
      if(attendance[i] === true){
        present ++
      }else{
        absent ++
      }
    }
    return { 
      name: name, 
      presentDays: present, 
      absentDays: absent 
    }
  }