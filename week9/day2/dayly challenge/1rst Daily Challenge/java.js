function makeAllCaps(words) {
const prom = new Promise((resolve, reject) => {
if (words.every(string)) {
    resolve(words.map((word) => word.toUpperCase()));
} else {
    reject("Sorry,should be a  string");
}
})
prom
.then(console.log)
.catch(console.error);
}

function string(arg) {
    return typeof arg  === "string";
}

function  sortWords(words) {
    return new Promise((resolve,reject) => {
if (words.length >= 4) {
resolve (words.sort())
}else {
    reject("Short Array!!!!")
}
})
sortWords.then(console.log).catch(console.error);
}



 

 