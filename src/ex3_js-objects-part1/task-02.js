function objPrint(obj){   
  //use "for" cycle and print every proprerty with pattern strings
  for(let key in obj){
    	if(obj.hasOwnProperty(key)){
    		console.log(`Key ${key} has value ${obj[key]}`);
    	}
    }
}
module.exports = objPrint;