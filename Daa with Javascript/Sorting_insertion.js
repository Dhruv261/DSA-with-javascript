function insertion(arr){
    for(var i = 1; i<arr.length;i++){
        var startingElement = arr[i]
        for(var j = i-1; j>=0 && arr[j]>startingElement; j--){
            arr[j+1]=arr[j]
        }
        arr[j+1] = startingElement
    }
    return arr
}

insertion([5,3,4,1,2])

/*
Insertion sort:
   [5,3,4,1,2]
   [3,5,4,1,2]
   [3,4,5,1,2]
   [1,3,4,5,2]
   [1,2,3,4,5]
*/
/*
Time compalixity
worst - O(n^2)
best - O(n)

space complaxity - O(1)
*/


