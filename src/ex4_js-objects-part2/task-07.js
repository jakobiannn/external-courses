function compareString(str, num) {
	let newStr = '';
	if(num < str.length){
		newStr = str.slice(0, num - 1) + '…';
	}
	return newStr;
}

module.exports = compareString;