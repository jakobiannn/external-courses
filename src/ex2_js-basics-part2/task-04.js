function checkIdentical(arr){
  for( let i = 1; i < arr.length; i++){
    if (arr[0] !== arr[i]) { return false; }
  }
  return true;
}
module.exports = checkIdentical;