//In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.

(function (name) {
const div = document.createElement("div")
div.innerText = name
const navbar =document.querySelector(".navbar")
navbar.appendChild(div)
navbar?.append(image)

const image = document.createElement("img");

image.src  = "https://cdnn21.img.ria.ru/images/7e4/1/1e/1564071684_0:94:2884:1716_640x0_80_0_0_7286f7af2f6539992999f64776469e83.jpg.webp"


})("Nadya")