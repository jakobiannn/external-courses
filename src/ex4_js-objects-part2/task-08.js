function setLowerCamelCase(str){
	let arrStr = str.toLowerCase().split(' ');

	for(let i = 1; i < arrStr.length; i++) {
			arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
		}

	return arrStr.join("");
}

module.exports = getLowerCase;
