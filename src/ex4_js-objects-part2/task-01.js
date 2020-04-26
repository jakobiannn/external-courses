function findProto(property, obj){
  if (property in Object.getPrototypeOf(obj)){
    return obj[property];
  }

  return undefined;
}
module.exports = findProto;
