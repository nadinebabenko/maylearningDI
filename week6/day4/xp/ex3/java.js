(function life(numberofchildren, partnername, geographiclocation, jobitle,numofdogs){
const sentence = `You will be a ${jobitle} in ${geographiclocation} , and married to ${partnername} with ${numberofchildren} kids and ${numofdogs} doggos`
console.log(sentence)
const p = document.createElement("p")

p.innerText = sentence
document.body.appendChild(p);

})(0, "myLove", "CZ" , "technician",3)