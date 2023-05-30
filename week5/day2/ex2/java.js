const forma = document.querySelector("form")
console.log(forma);
function clicnking (event){
    event.preventDefault();
    const firstn = document.querySelector("[name=fname]").value
const secondn = document.querySelector("[name=lname]").value
    console.log(firstn, secondn);
    if  (firstn === ""||secondn === ""){
        alert("left smthto fill in")
    } else {
        const ul = document.querySelector(".usersAnswer")
const li  = document.createElement("li")
const li2  = document.createElement("li")
li.innerText = firstn
li2.innerText = secondn
ul.append(li,li2 )

    }
  }
  forma.addEventListener("submit", clicnking)
