
let allBoldItems

function  getBoldItems() {
    allBoldItems  = document.getElementsByTagName("strong")
}

function   highlight() {
    getBoldItems() 
  for (const item of allBoldItems) {
    item.style.color = "blue"

  }
}


function   returnormal() {
    getBoldItems()
    for (const items of allBoldItems){items.style.color = "black"

    }
}
const para = document.querySelector("p")
para.addEventListener("mouseover" , highlight)
para.addEventListener("mouseout" , returnormal)
