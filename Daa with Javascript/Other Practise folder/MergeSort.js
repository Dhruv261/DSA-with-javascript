function merge(arr1,arr2){
	var result = []
	var i = 0
	var j = 0


	while(i < arr1.length && j < arr2.length ){
		if(arr2[j]>arr1[i]){
			result.push(arr1[i])
			i++
		}
		else{
			result.push(arr2[j])
			j++
		}
	}
	while(arr1.length > i){
		result.push(arr1[i])
		i++
	}
	while(arr2.length > j){
		result.push(arr2[j])
		j++
	}
	return result
}


function mergeSort(arr){
	if(arr.length<=1){return arr}

	let mid = Math.floor(arr.length/2)

	let left = mergeSort(arr.slice(0,mid))

	let right = mergeSort(arr.slice(mid))

	return merge(left, right)
}


console.log(mergeSort([2,6,5,7,6,5,8,9]))

