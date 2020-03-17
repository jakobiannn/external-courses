function addString(str1, str2, num) {
	let space = 0;
	let newStr = '';

	for(let i = 0; i < str1.length; i++){
		if(str1[i] === ' '){
			space++;
		}

		if(space === num + 1){
			newStr = str1.slice(0, i + 1)+ str2 + str1.slice(str1.length - i - 1, str1.length);
			break;
		}
	}
	
	return newStr;
}


module.exports = addString;