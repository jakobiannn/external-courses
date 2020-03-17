function getLowerCase(str){
	let newStr = str.toLowerCase();

	for(let i = 1; i < newStr.length; i++){
	  if(newStr[i] === ' '){
	    newStr = newStr.slice(0, i) + newStr[i + 1].toUpperCase() + newStr.slice(i + 2);
	  }
	}
	return newStr;
}

module.exports = getLowerCase;