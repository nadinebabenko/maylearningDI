let distance = 0

function myMove(){
    setInterval(moving,1)
}

function moving() {
    if (distance ===350)return
    distance = distance + 1
    const square =  document.getElementById("animate")
    square.style.left = distance + "px"
}