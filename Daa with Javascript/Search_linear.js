function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {

            return i;
        }
       
    }
     return -1;
} 

linearSearch([10, 15, 20, 25, 30], 15)
