function sliceArr(arr, begin, end){
	let slicedArr = [];
	let beginCopy = begin;
	let endCopy = end;

	if(beginCopy === undefined){
		beginCopy = 0;
	}
	if(endCopy === undefined){
		endCopy = arr.length;
	}
	if(beginCopy < 0){
		beginCopy = arr.length + beginCopy;
	}
	if(endCopy < 0){
		endCopy = arr.length + endCopy;
	}

	for(let i = beginCopy; i < endCopy; i++){
		slicedArr[i - beginCopy] = arr[i];
	}

	return slicedArr;
}
module.exports = sliceArr;
