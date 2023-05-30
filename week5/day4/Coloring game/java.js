colors()
let currentcol
listentomain()
let mousepress = false
const button = document.querySelector(".clear")
clearbutton()


function clearbutton(){
button.addEventListener("click" , deleteall)
}

function deleteall() {
    currentcol = null
    const squares =document.querySelectorAll("#main > div")
    for (const square of squares ) {
        square.style.backgroundColor = 'white'
    }
    
}

function listentomain() {
    const main = document.getElementById("main")
    main.addEventListener("mousedown",click)
    main.addEventListener("mousemove",move)
    document.body.addEventListener("mouseup", up)
}

function up() {
    mousepress = false
}

function click() {
if(currentcol === null)return
mousepress = true

}
function move (e) {
if(!mousepress)return
console.log("coordinate",e.x, e.y)
const currentposition = document.elementFromPoint(e.x, e.y)
currentposition.style.backgroundColor = currentcol
}


function colors(){
    const colordivs= document.querySelectorAll(".color")

for (const colordiv of colordivs){
    const randomcolor = generaterandomcolour()
    colordiv.style.backgroundColor= randomcolor 
    colordiv.dataset.color = randomcolor
    colordiv.addEventListener("click", setcolour)
}

}

function generaterandomcolour() {
   const hex = Math.floor(Math.random()*16777215).toString(16); 
   return "#" + hex
}
function setcolour(event) {
    currentcol = event.target.dataset.color
  
}