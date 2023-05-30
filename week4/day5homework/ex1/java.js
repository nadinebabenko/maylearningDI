const users = document.getElementById("container")
console.log(users)

//Change the name “Pete” to “Richard”.

document.querySelector(".list").children[1].textContent = "Richard"

//Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
const lists = document.querySelectorAll(".list")
lists[1].children[1].remove()

//Change each first name of the two <ul>'s to your name. (Hint : use a loop)

lists.forEach(list => list.firstElementChild.textContent = "Nadya");