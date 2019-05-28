//constructor function for creating the letters to guess
var Letter = function(guess){
    this.guess = guess;
    this.toString = [];
    this.guessed = false;

    this.addLetter = function(value){
        this.guess.push(new Letter(value));
    }
}

module.exports = Letter;
