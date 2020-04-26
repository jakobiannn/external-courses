function setUpper(str){
	let arrStr = str.split(' ');

  for(let i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1);
  }

  return arrStr.join(" ");
}
module.exports = setUpper;
