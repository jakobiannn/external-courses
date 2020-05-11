let Calculator = {
  result: undefined,

  multiply(num = 1){
    if (this.result === undefined) { this.result = 1;}
    this.result *= num;
    return Calculator;
  },
  getResult() {
    return this.result;
  },
  add(num = 0) {
    if (this.result === undefined) { this.result = 0;}
    this.result += num;
    return Calculator;
  },
  subtract(num = 0) {
    if (this.result === undefined) { this.result = 0;}
    this.result -= num;
    return Calculator;
  },
  divide(num = 1) {
    if (this.result === undefined) { this.result = 0;}
    this.result /= num;
    return Calculator;
  },
  reset() {
    this.result = 0;
    return Calculator;
  },
  setState(num = 0) {
    this.result = num;
    return Calculator;
  },
  fetchData(cb) {
    this.result = 500;
    setTimeout(cb, 3000, 500);
    return Calculator;
  }
}

module.exports = Calculator;

