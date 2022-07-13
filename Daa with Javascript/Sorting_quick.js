function pivot(arr, start=0, end=arr.length - 1) {
    function swap(arr, i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let pivot = arr[start]
    let swapIdx = start

    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)

        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])

/*
[4,6,9,1,2,5,3]    pivot: this going to find the middle
[3,2,1,4,6,9,5]    pivot divided into two halfs left and right; right is larger subarray and left is smaller
      4         
3,2,1   6,5,9       3 and 6 are now the pivots
    3      6
2,1      5   9
   2     
1
*/
