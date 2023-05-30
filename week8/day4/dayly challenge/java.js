const form = document.querySelector("form")
const input = document.getElementById("search")
const container = document.querySelector(".container")
const deleteall = document.querySelector(".deleteall")
deleteall.addEventListener("click" ,deleting )

function deleting() {
    container.innerHTML = ""
}


form.addEventListener("submit" , submit)
function submit(event){
    event.preventDefault()
   const term  = input.value
   input.value = "";
   gifts(term)
   
}

function gifts(word){

console.log("we are looking for a word" , word)
const url = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1&`
console.log(url)
const xhr =  new XMLHttpRequest();
xhr.addEventListener("load", log) 
xhr.open("GET" , url)
xhr.send()
}


function log(e){
const response = JSON.parse(e.target.response)
const result =response.data[0]

const imgUrl = result.images.fixed_width.webp;
console.log(imgUrl)
createImage(imgUrl)
}
function createImage(url) {
    const div= document.createElement("div")

const img = document.createElement("img")
img.src = url
const button = document.createElement("button")

button.textContent="Delete"
button.addEventListener("click" , click)
div.prepend(button)
div.prepend(img)
container.prepend(div)
}


function click (e) {
    const parentDiv = e.target.parentElement
parentDiv.remove()
}

