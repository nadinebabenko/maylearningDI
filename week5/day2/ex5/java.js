const form  = document.getElementById("myForm")
const radius = document.getElementById("radius")
const volume = document.getElementById("volume")
form.addEventListener("submit" , submit)

function submit(event) {
    event.preventDefault()
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const v = (4 / 3) * Math.PI * r ** 3;
    volume.value = v;

}
document.addEventListener("DOMContentLoaded" , content)

function content() {
    console.log("HTML was loaded")
}
const p  = getElement("p")

p.addEventListener("click" , backgroundcolor) 

function getElement(selector) {
    return document.querySelector(selector)
}

function backgroundcolor () {
    p.classList.add("pink")
}