function arrReduce(array, callback, initialValue){
	let previousValue = null;
	if(initialValue !== undefined){
		previousValue = initialValue;
	}
	for(let i = 0; i < array.length; i++){
		previousValue = callback(previousValue, array[i], i, array);
	}
	return previousValue;
}
module.exports = arrReduce;