function hasProperty(str, obj){
  //check key with 'for' cycle and return true or false
 if (str in obj){
    return true;
  }
  
  return false;
}
module.exports = hasProperty;