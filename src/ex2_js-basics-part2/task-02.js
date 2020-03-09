function showArr(arr){
  //make 'for' cycle and print every interation
  //print array length at the end of function
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  console.log(`Total elements: ${arr.length}`);
}
module.exports = showArr;