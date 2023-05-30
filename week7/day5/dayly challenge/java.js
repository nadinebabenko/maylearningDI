function anagramm(sentence1, sentence2 ){
const total = {}
const str1 = sentence1.toLowerCase().split(" ").join("")
const str2 = sentence2.toLowerCase().split(" ").join("")
for (const letter of str1) {
    total[letter] =  total[letter] +1 || 1
}
for (const letter of str2) {
    total[letter] =  total[letter] ?  total[letter] -1 :-1

}
const differs = Object.values(total)
return !differs.some((num) => num !=0)

}
const result = anagramm("nadya", "danay")
console.log("result:", result )