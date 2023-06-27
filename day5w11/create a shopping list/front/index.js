const form = document.querySelector("form");
const ul = document.getElementById("items")
form?.addEventListener("submit", handlesubmit);
let items
const url =  "http://localhost:3000/items"

populateItems();

function displayitems() {
for (const item of items) {
console.log(item)
const li = document.createElement("li")
li.innerText = `${item.item}:${item.quantity}`;
ul.append(li);
}
}

async function  populateItems(){
const response = await fetch(url);
const jsonResponse  = await response.json();
console.log(jsonResponse)
items = jsonResponse;
displayitems()
}


async function handlesubmit(event) {    
event.preventDefault(); 
const formData = new FormData(form);
const entries = formData.entries();
const body = {}
for(const entry of formData) {
    console.log(entry)
    const key = entry[0]
    const value = entry[1]
    body[key] = value
}
await sendbodytoserver(body);
populateItems()
}

async function sendbodytoserver(body) {

const options =  
{method: "POST",
body: JSON.stringify(body),
headers: {
    "Content-Type": "application/json"
}
};
try {
const res = await fetch(url, options)
console.log("Form is sent to the server", res)
}catch(err) {
console.log("Here it is a problem", err)
}

}