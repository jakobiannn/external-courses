function Hangman(word) {
  this.word = word.toLowerCase().split(''); //угадываемое слово
  this.rightSymbols = [];
  this.wrongSymbols = [];
  this.errors = 6;
 
  this.guess = function(symbol) {
    this.symbol = symbol.toLowerCase();
    if(this.word.includes(this.symbol)) {
      this.rightSymbols.push(this.symbol); 
      if (this.word.join('') === this.getGuessedString()) {
        console.log(this.getGuessedString() + " | You won!");
      } else {
        console.log(this.getGuessedString());
      }
    } else {
      this.errors--;
      if (!this.wrongSymbols.includes(this.symbol)) {
        this.wrongSymbols.push(this.symbol); 
      }
      console.log("wrong letter, errors left " + this.errors + " | " + this.getWrongSymbols().join());
      if (this.errors === 0) {
        console.log("You lost!");
      }
    }
    return this;
  }
  this.getGuessedString = function() {
    let guessedString = '';
    for(let i = 0; i < this.word.length; i++) {
      if(this.rightSymbols.includes(this.word[i])){
        guessedString += word[i];
      } else {
        guessedString += '_';
      }
    }
    return guessedString;
  }
  this.getWrongSymbols = function() {
    return this.wrongSymbols;
  }
  this.getErrorsLeft = function() {
    return this.errors;
  }
  this.getStatus = function() {
    console.log(this.getGuessedString() + ' | errors left ' + this.getErrorsLeft());
  }
  this.startAgain = function(word) {
    return new Hangman(word);
  }
}
var hangman = new Hangman('webpurple');

module.exports = hangman;