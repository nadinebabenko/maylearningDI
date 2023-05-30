const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let accron = "" 
for (const name of  names.sort()) {
    console.log (name)
    accron = accron +name[0] 
}
console.log (accron )
 
 




//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//Console.log the name of their secret //society. The output should be “ABJKPS”