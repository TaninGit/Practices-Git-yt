// cuttingGrade
function getScoringPass(scores) {
    //bind&nbsp;and&nbsp;store&nbsp;"scores"&nbsp;argument&nbsp;to&nbsp;use&nbsp;in&nbsp;the&nbsp;nested&nbsp;"cuttingPoint"&nbsp;function
    function cuttingPoint(cuttingScore) {
      return scores.filter((score) => score >= cuttingScore)
    }
    return cuttingPoint
  }
  
  //fn_cuttingPoint1&nbsp;and&nbsp;fn_cuttingPoint2&nbsp;are&nbsp;instance&nbsp;closure&nbsp;functions
  //that&nbsp;bind&nbsp;to&nbsp;each&nbsp;their&nbsp;outer&nbsp;parameter&nbsp;"scores"
  let fn_cuttingPoint1 = getScoringPass([50, 15, 32, 80, 100]) //return cuttingPoint
  console.log(typeof fn_cuttingPoint1) //function
  
  console.log(fn_cuttingPoint1(50)) //[ 50, 80, 100 ]
  console.log(fn_cuttingPoint1(10)) //[50, 15, 32, 80, 100]
  console.log(fn_cuttingPoint1(90)) //[ 100]
  
  const fn_scores_2 = getScoringPass([10, 20, 30, 40, 50])
  console.log(fn_scores_2(50)) //[ 50 ]
  console.log(fn_scores_2(10)) //[10, 20, 30, 40, 50]
  console.log(fn_scores_2(90)) //[]

  