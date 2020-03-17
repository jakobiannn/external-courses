function findString(str, findedStr){
	if (str.includes(findedStr)){
		return true;
	}
	return false;
}

module.exports = findString;