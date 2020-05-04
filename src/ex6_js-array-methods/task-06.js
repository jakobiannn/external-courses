function reduceArr(array, callback, initialValue){
	let previousValue;
	let i = 0;
	if(initialValue !== undefined){
		previousValue = initialValue;
	} else {
		previousValue = array[0];
		i = 1;
	}

	for(i; i < array.length; i++){
		previousValue = callback(previousValue, array[i], i, array);
	}
	return previousValue;
}
module.exports = reduceArr;
