const h1 = firsth1()
remove()
const h2 = secondh2()
const h3  = getElement("h3")

button()

h2.addEventListener("click" , backgroundcolor) 

h3.addEventListener("click" , hide) 



function backgroundcolor () {
    h2?.classList.add("red")
}

function firsth1 () {
    const article= document.querySelector("article")
    article.lastElementChild.remove()
}
function remove() {
   return document.querySelector("article" > h1)
}

function secondh2 () {
    return document.querySelector("article > h2")
}
function getElement(selector) {
    return document.querySelector(selector)
}
function hide() {
    h3.classList.add("hide")
}

function button () {
const buton = document.createElement("button")
buton.textContent = "bold"
const article = getElement("article")
buton.addEventListener("click", boldpara) 
article.appendChild(buton)
}


function boldpara(){
    const para = document.querySelectorAll("p")
    for (const paras of para){
        paras.classList.add("bold")
}
}

 

