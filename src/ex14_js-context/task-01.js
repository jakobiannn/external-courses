let Calculator = {
  result: 0,

  multiply(num = 1){
    if (this.result === 0) { this.result = 0;}
    this.result *= num;
    return this;
  },
  getResult() {
    return this.result;
  },
  add(num = 0) {
    this.result += num;
    return this;
  },
  subtract(num = 0) {
    this.result -= num;
    return this;
  },
  divide(num = 1) {
    this.result /= num;
    return this;
  },
  reset() {
    this.result = 0;
    return this;
  },
  setState(num = 0) {
    this.result = num;
    return this;
  },
  fetchData(cb) {
    this.result = 500;
    setTimeout(cb, 3000, 500);
    return this;
  }
}

module.exports = Calculator;

