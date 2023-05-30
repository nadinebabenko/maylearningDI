//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
const button = getButton()
button.addEventListener("click", clicking)






//Make sure the values are not empty
//Write a story that uses each of the values.
//Make sure you check the console for errors when playing the game.

function clicking (e) {
    e.preventDefault()
    const noun = document.getElementById("noun").value
const adjective = document.getElementById("adjective").value
const person = document.getElementById("person").value
const verb = document.getElementById("verb").value
const place = document.getElementById("place").value
if (noun == "" || person== "" || verb == "" || place == "" || adjective == "") return
 const mysmallstory = storys (noun , adjective , person , verb , place) 

 console.log (mysmallstory)
 storytelling (mysmallstory)
}

function storytelling (mysmallstory) { 
const newone = document.getElementById("story")
const cvt = document.createElement("cvt")
cvt.innerText = mysmallstory
newone.appendChild(cvt)

}


 function storys(noun , adjective , person , verb , place) {return `my favourite hobby is ${noun} I like it when its ${adjective}  at ${person}   , making   ${verb} in a ${place}`
 }

function getButton() {
    return document.getElementById ("lib-button")
}