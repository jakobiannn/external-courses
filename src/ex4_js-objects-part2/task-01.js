function findProto(property, obj){
  for(let key in obj){
    if(!obj.hasOwnProperty(key)){
      if(property === key){return obj[property];}
    }
  }
  return undefined;
}

module.exports = findProto;