setTimeout(Hello, 2000)
setTimeout(paragraph, 2000)
const interval = setInterval (paragraph, 2000)


function Hello(){
    alert("Hello World!")
}
 
function paragraph(){
    const para = document.createElement("p") 
    para.textContent = ("Hello World")
    const container  = document.getElementById("container")
    if(container.children.length < 5) {
        container.appendChild(para)
    }else {
        intervals()
    }
}


const button = document.getElementById("clear")
button.addEventListener("click" , intervals)

function intervals() {
clearInterval(interval)
}