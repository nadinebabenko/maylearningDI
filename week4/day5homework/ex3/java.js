//Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const div = document.getElementById("navBar")
div.setAttribute("id", "socialNetworkNavigation");
console.log(div)

//First, create a new <li> tag (use the createElement method).
const newli  = document.createElement("li") 
//Create a new text node with “Logout” as its specified text.
//Append the text node to the newly created list node (<li>).

const newtext = document.createTextNode("Logout");
console.log(newtext)

newli.appendChild(newtext);
console.log(newli)
 
const ul = document.querySelector("ul")
ul.appendChild(newli)
 
  

//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method./</ul>