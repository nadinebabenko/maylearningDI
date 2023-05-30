//Prompt the user for several words (separated by commas).
const answer = prompt("A few words seperated by comma");

const words = answer.split (",");
 const lengthOflongestWord = getlengthOflongestWord();

 function displayRows () {
const delimiterRow = createDelimiterRow ()
console.log(delimiterRow);
for   (const word of words) {
    displayWord(word);
 }
 console.log(delimiterRow);
}
displayRows () 
function displayWord(word) {
const numberOfSpacesToAdd = lengthOflongestWord - word.length + 1;
const emptySpaces = " ".repeat(numberOfSpacesToAdd);
console.log("* " + word + emptySpaces + "*")
}
function getlengthOflongestWord () {
let lengthOflongestWord = 0;
for (const word of words) {
    const wordlength  = word.length;
    if (wordlength > lengthOflongestWord) {
        lengthOflongestWord = wordlength;
    }

}
return lengthOflongestWord;
}
function createDelimiterRow () {
const numberofStarsontheFirstRow = lengthOflongestWord + 4;
let row = "";
for (let i = 0; i < numberofStarsontheFirstRow; i++) {
    row = row + "*";
}
return row;

}
