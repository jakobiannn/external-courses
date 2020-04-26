function removeSpace(str){
	let newStr = str;
	
	while (newStr[0] === ' ' || newStr[str.length] === ' ') {
		newStr = newStr.trim();
	}
	return newStr;
}
module.exports = removeSpace;
