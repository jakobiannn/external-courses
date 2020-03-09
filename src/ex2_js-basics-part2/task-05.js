function getMaxValue(arr){
  //give value of first element on array and take it for maximum
  let max = arr[0];
  
  for( let i = 1; i < arr.length; i++){
    //compare him with every element
    if (arr[i] > max) { 
    	//if there is a larger element
    	//set this value to 'max' variable
    	max = arr[i]; 
    }
  }
  return max;
}
module.exports = getMaxValue;