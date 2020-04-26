function symbolCount(str) {
	let arrStr = str.split(''),
	    counter = 1,
        arrLength = arrStr.length;

    for (let i = 0; i < arrLength; i++) {
      for (let j = 1; j < arrStr.length; j++) {
        if(arrStr[0] === arrStr[j] && arrStr[0] !== undefined) {
          counter++;
          delete arrStr[j];
        }
     }
     if(arrStr[0] !== undefined) {
      console.log("Элемент " + arrStr[0] + " встречается " + counter + " раз.");
     }
      arrStr = arrStr.slice(1);
      counter = 1;
     }
}

module.exports = symbolCount;
