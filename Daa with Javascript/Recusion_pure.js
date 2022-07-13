function collectOddValues(arr){
    let newArr = []
    let secondArr = []
    if(arr.length===0){
        return newArr;
    }
    if(arr[0]%2 !== 0){
        secondArr.push(arr[0])
    }
    newArr.push() 
    collectOddValues(arr.slice(1))
    return secondArr
}


collectOddValues([1,2,3,4,5,6,7,8,9])