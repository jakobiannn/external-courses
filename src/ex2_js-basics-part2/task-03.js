function checkeven(arr){
  //make variable for every number type
  let even = 0;
  let odd = 0;
  let zero = 0; 
  //check every number in array 
  for ( let i = 0; i < arr.length; i++ ){   
    //comparison operator should have typeof operator
    //because if function take string, she will pass all comparisons
    //and adding to wrong type numbers
    if (typeof(arr[i]) === 'number') {
      if (arr[i] === 0){ zero++; } //add +1 of count of every number type
    
      else if (arr[i] % 2 === 0){ odd++; }
    
     else if ((arr[i] % 2 !== 0) && 
              (arr[i] !== 0)) {
       even++;
     }
    }
  }
   return [odd, even, zero];
}
module.exports = checkeven;