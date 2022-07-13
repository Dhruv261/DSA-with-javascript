function merge(left,right){
    let result = []
    let l = 0
    let r = 0
    while(l<left.length && r<right.length){
        if(left[l] > right[r]){
            result.push(right[r])
            r++
        }
        else{
            result.push(left[l])
            l++
        }
    }
    while(l<left.length){
        result.push(left[l])
        l++
    }
    while(r<right.length){
        result.push(right[r])
        r++
    }
    return result
}
function mergeSort(arr){
    if(arr.length<=1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}


mergeSort([24,10,75,48,52,99])