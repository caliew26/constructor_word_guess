var GuessedLetter = require("./Letter.js");

function WordToGuess(word){
    this.letterArray = [];
    for(let i = 0; i < word.length; i++){
        this.letterArray.push(new GuessedLetter(word[i]))
    }
    this.wordString = function(){
        var wordString = "";
        for(let j = 0; j <this.letterArray.length; j++){
            wordString += this.letterArray[j].guess() + " ";
        }
        return wordString
    }
    this.userGuess = function(guessed){
        for(let k = 0; k < this.letterArray.length; k++){
            this.letterArray[k].userGuess(guessed)
        }
    }
}

module.exports = WordToGuess;