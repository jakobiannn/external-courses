function checkeven(arr){
  let even = 0, odd = 0, zero = 0;

  for ( let i = 0; i < arr.length; i++ ){   
    if (typeof(arr[i]) === 'number') {
      if (arr[i] === 0){
        zero++; 
      } 
      else if (arr[i] % 2 === 0){
        odd++;
      }
      else if ((arr[i] % 2 !== 0) && 
              (arr[i] !== 0)) {
       even++;
     }
    }
  }
  return [odd, even, zero];
}
module.exports = checkeven;