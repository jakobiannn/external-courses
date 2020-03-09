function checkOrAdd(str, obj){
  //check key with 'for' cycle
  for(key in obj){
	if(obj.hasOwnProperty(key)){
		//if input string is unequal to key - create new property
      	if (str !== key){
        	obj[str] = 'new'; // eslint-disable-line no-param-reassign
        }
    }	
  }
  return obj;
}
module.exports = checkOrAdd;