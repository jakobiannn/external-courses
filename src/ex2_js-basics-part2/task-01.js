function showMessage(numorstr) {
  // make switch case operator and compare numorstr type with 
  // string and number types
  switch (typeof(numorstr)){
      case 'number' : {
        return 'number';
      }
      case 'string' : {
        return 'string';
      }
      default : {
        return undefined;
      }
  }
}
module.exports = showMessage;