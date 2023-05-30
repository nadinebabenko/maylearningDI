 const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

 function toJs() {
return new Promise((resolve,reject)=>{
    if(morse.length === 0) {
reject("Empty string")
}else {
const morseObj =JSON.parse(morse)
resolve (morseObj)
}
})
 }
 function toMorse(morseJS) {
    const newword =prompt("Enter  smth")
    return new Promise((resolve,reject) => {
        const letters = Object.keys(morseJS)
        if (newword.split("").some((letter) => !letters.includes(letter))) {
            reject("Lowercase pls")
        }
            else {
              
                resolve(converting(newword , morseJS))
            }
        })
    }
function converting (newword ,morseJS) {
const letters = newword.split("")
return letters.map((letter) => morseJS[letter])
}


 toJs()
 .then((morseObj) => toMorse(morseObj))
 .then((res)=> console.log(res))
 .catch((err) => console.error(err))


