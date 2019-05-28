//create an array of words that will be randomly chosen and will populate as the user is prompted to guess a letter and if that letter is in the word it will switch the underscore for the letter and tell the user they guessed correcty.  If the letter is not in the hidden word then it will say the user has guessed incorrectly and the number of guesses left (will start at 13) will go down by 1.  If the user guesses correctly the number of guesses left will remain at the number it is.  
//Does need a constructor(?) that will hold an underscore or a blank spot (is the word to be guessed), also a boolean (true/false) to see if letter has been guessed prior or not.
//will be a letter page and a word page that will be module.exports (means dependent).

//require word.js
var WordToGuess = require("./word.js");
//inquirer prompt is going to be required
var inquirer = require("inquirer");

////create an array of words
var wordList = ["Mickey", "Minnie", "Donald", "Daisy","Huey", "Dewey", "Scrooge", "Goofy", "Pluto", "Peter", "Cinderella", "Jasmine", "Aurora", "Rapunzel", "Belle", "Pocahontas", "Walt"];

//that will be randomly chosen
//random math generator (makes an array)
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
//random word chosen from the random math generator array
var randomWordChosen = [];
//need an answerArray, need to account for the underscore_; will loop through the randomWordChosen
for (let i = 0; i < randomWord.length; i++){
    randomWordChosen[i] = "_";
}
//letters a user can choose
var lettersLeft = randomWord.length;

// while (lettersLeft > 0){
//     console.log("Keep guessing");
// }

//variables needed for userGuess, maxNumGuess, wins, loss, 
var userGuess = [];
var maxNumGuess = 13;
var wins = 0;
var loss = 0;




//need to be able to reset the game
var resetGame = function(){
    maxNumGuess = 13;
}

//inquirer prompt for the user to guess a letter
function pickALetter(){
    inquirer.prompt([
        {
            type: "input",
            message: "Pick a letter",
            name: "userGuessLetter"
        }
    ])
    .then(function(userRes){
        for(let j = 0; j < randomWord.length; j++){
            if(randomWord[j] === userGuessLetter){
                randomWordChosen[j] = userRes;
                maxNumGuess--;
            }
        }
        console.log("you selected " + userRes.userGuessLetter);
    })
}

pickALetter();

function letterGuessed(letter, guessed){
    this.letter = letter;
    this.guessed = guessed;
    this.isGuessed = function(){
        if(this.letter === true){
            console.log("this is letterGuessed function");
        }
    };
}