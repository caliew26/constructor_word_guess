function Letter(guessedLetter) {
    this.letter = guessedLetter;
    this.guessed = false;
    this.toGuess = function(err){
        if(err) throw err;
        
        else if(letter === " "){
            this.guessed = true;
        } else {
            if(this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    this.guess = function(guess){
        if(guess === this.letter){
            this.guessed = true;
        }
    }

}
module.exports = Letter;

Letter();