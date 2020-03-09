function checkPrime(num){
  //check input value
  if (num > 1000) {
    return 'Данные неверны';
  }
  //find numbers that can be divided by input value
  for (let i = 2; i < num; i++){
    if ((num % i) === 0){
      return `Число ${num} - составное число`;
    }
  }
  //if such numbers were not found
  //return positive result
  return `Число ${num} - простое число`;
}
module.exports = checkPrime;