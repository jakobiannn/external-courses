function setUpper(str){
  let newStr = str[0].toUpperCase() + str.slice(1);
  
  for(let i = 1; i < newStr.length; i++){
    if(newStr[i] === ' '){
      newStr = newStr.slice(0, i + 1) + newStr[i + 1].toUpperCase() + newStr.slice(i + 2);
    }
  }
  return newStr;
}


module.exports = setUpper;