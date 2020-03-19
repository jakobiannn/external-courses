function arrSlice(arr, begin, end){
	let slicedArr = [];
	let beginCopy = begin;
	let endCopy = end;


	if(beginCopy === undefined){
		beginCopy = 0; 
	}
	if(endCopy === undefined){
		endCopy = arr.length - 1;
	}
	if(Math.sign(beginCopy) === -1){
		beginCopy = arr.length - beginCopy;
	}
	if(Math.sign(endCopy) === -1){
		endCopy = arr.length - endCopy;
	}

	for(let i = beginCopy; i <= endCopy; i++){
		slicedArr[i - beginCopy] = arr[i];
	}

	return slicedArr;
}
module.exports = mySlice;