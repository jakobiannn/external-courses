function mapArr(arr, callback){
	let newArr = [];

	for(let i = 0; i < arr.length; i++){
		newArr[i] = callback(arr[i], i, arr);
	}
	return newArr;
}
module.exports = mapArr;
