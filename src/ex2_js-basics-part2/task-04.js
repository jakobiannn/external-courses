function checkIdentical(arr){
  //chek current value with next value in array 
  //beginning with first array element
  for( let i = 1; i < arr.length; i++){
    if (arr[0] !== arr[i]) { return false; }
  }
  return true;
}
module.exports = checkIdentical;