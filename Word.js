var Letter = require("./lettertake2.js");

var Word = function(word){
    this.word = [];

    this.addWord = function(value){
        this.word.push(new Letter(word));
    }
}

// function WordToGuess(word){
//     this.letterArray = [];
//     for(let i = 0; i < WordToGuess.length; i++){
//         this.letterArray.push(new Letter(word[i]))
//     }
//     this.wordString = function(){
//         var wordString = " ";
//         for(let j = 0; j <this.letterArray.length; j++){
//             wordString += this.letterArray[j].guess() + " ";
//         }
//         return wordString
//     }
//     this.userGuess = function(guessed){
//         for(let k = 0; k < this.letterArray.length; k++){
//             this.letterArray[k].userGuess(guessed)
//         }
//     }
// }

module.exports = Word;