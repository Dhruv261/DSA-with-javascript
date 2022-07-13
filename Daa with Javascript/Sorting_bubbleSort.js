function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function bubbleSort(arr){
    for(var i = arr.length; i>0;i--){
        var noSort = true
        for(var j =0; j<i-1;j++){
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
                noSort = false
            }
        }
    }
    return arr
}

bubbleSort([5,3,4,9,8,6])                       