function checkOrAddProperty(prop, obj){
  for(key in obj){
	  if(obj.hasOwnProperty(key)){
     	if (prop !== key){
        obj[prop] = 'new'; //eslint-disable-line no-param-reassign
      }
    }	
  }
  return obj;
}
module.exports = checkOrAdd;