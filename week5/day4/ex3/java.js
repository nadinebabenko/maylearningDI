const yellowbox = document.getElementById("target")
const redbox = document.getElementById("box")

yellowbox.addEventListener("dragover", allowDrop)
yellowbox.addEventListener("dragenter", dragenter)
yellowbox.addEventListener("dragleave", dragleave)
yellowbox.addEventListener("drop", drop)

function dragStart(event){

}

 function allowDrop(event){
    event.preventDefault();
    yellowbox.classList.add("hover");
 }

 function dragleave(event) {
    event.preventDefault();
    yellowbox.classList.remove("hover");
 }
 function dragenter(event) {
    event.preventDefault();
    yellowbox.classList.add("hover");
 }
 function drop( ){
    yellowbox.classList.remove("hover");
    yellowbox.append(box);
 }
  