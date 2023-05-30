const sentence = "This dinner is bad !"

const wordNot  = sentence.search ("not")
console.log (wordNot)


const wordBad  = sentence.search ("bad")

if (wordNot === -1) {
console.log (sentence)
} else if (wordNot < wordBad) {
console.log (' wordBad ')
console.log (' wordNot ')

const firstpart = sentence.slice( 0, wordNot )
const secondpart = sentence.slice(wordBad + 3)
console.log(firstpart + "good" + secondpart )
} else {
    console.log (sentence)
}


 