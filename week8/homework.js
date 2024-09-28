function removeFalsyValues(arr) {
    const result_arr = []
    for(const item in arr){
        if(arr[item] !== "" && arr[item] !== 0 && arr[item] !== false  && arr[item] !== null && arr[item] !== undefined){
            result_arr.push(arr[item])
        }
    }
    return console.log(result_arr)
}

removeFalsyValues([0,1,false,2,"",3])
removeFalsyValues(['a',"",'b',null,'c'])
removeFalsyValues([null,undefined,'A'])
