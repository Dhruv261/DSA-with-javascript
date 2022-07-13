function collectOddValues(arr) {
    let result = [];
    
    helper(arr);

    function helper(helperInput) {
        if (helperInput.length === 0) { //this will check if the array is empty or not
            return;
        }
        if (helperInput[0] % 2 !== 0) { //this will check the first element of each array and then tell if its odd or not
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))    //This is removing the first element of the array
    }
    

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
