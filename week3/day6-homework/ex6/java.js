const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = ""

for (const key in details) {
console.log (key)
sentence = sentence  + " "   + key + " "  + details [key] 
}
console.log (sentence)

