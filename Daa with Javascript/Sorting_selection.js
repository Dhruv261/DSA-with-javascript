function swap(arr,smallestElement,i){
   var temp = arr[smallestElement] 
            arr[smallestElement] = arr[i]
            arr[i] = temp
}

function selectionSort(arr){
    for(var i =0; i<arr.length; i++){
        var smallestElement = i
        for(var j = i+1 ; j<arr.length;j++){
            if(arr[smallestElement] > arr[j]){
                smallestElement = j
            }
        }
            swap(arr,smallestElement,i)
    }
    return arr
}

selectionSort([5,3,4,1,2])