function printKeysAndValues(obj){   
  for(let key in obj){
    	if(obj.hasOwnProperty(key)){
    		console.log(`Key ${key} has value ${obj[key]}`);
    	}
    }

    return undefined;
}
module.exports = objPrint;