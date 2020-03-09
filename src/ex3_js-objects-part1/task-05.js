function createCopy(obj){
  let copy = Object.assign({}, obj);
  return copy;
}
module.exports = createCopy;