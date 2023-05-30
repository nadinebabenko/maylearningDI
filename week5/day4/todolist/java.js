const forma = document.getElementById("forma")
const ul = document.querySelector(".listTasks")


forma.addEventListener("submit", submit)
const tasks = [];

function submit(event) {
event.preventDefault()
const task = document.querySelector("input").value
 if(task === "")return;
tasks.push(task);
alltasks(tasks);
forma.reset();
}

function alltasks(tasks){
    console.log("tasks:", tasks)
    ul.innerHTML = "";

for(const task of tasks){
    console.log("current task:", task)
    const li = markus(task)
    ul.append(li);
} 
}

function markus(task) {
    const li = document.createElement("li")
const mark =  document.createElement("i");
mark.classList.add("fa-solid" ,"fa-x");
const box = document.createElement("input");
box.setAttribute("type", "checkbox");
const field = document.createElement("label")
field.innerText = task

li.append(mark , box , field);

return li;

}