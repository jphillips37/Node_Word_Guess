var Letter = require("./letter.js");

var Word = function(word){
    var letterArr = []
    var wordArr = [];

    for (i=0; i < word.length; i++){
        letterArr[i] = new Letter(word[i], false);
    }
    // for (i=0; i <letterArr.length; i++){
    //     letterArr[i].checkChar("t");
    // }
    // for (i=0; i <letterArr.length; i++){
    //     wordArr[i] = letterArr[i].toString();
    // }
    console.log(wordArr.join(" "));

    this.stringFunction = function(){
        var newWordArr = [];
        for (i=0; i < letterArr.length; i++){
            newWordArr.push(letterArr[i].toString());
        }
        return newWordArr.join(" ");
    }
    this.letterGuess = function(char){
        for (i=0; i < letterArr.length; i++){
            letterArr[i].checkChar(char);
        }
    }
}

module.exports = Word;
// var newWord = new Word("letters");
// newWord.letterGuess("s");
// var consoleThis = newWord.stringFunction();
// console.log(consoleThis);
