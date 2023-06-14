const ids = ["first", "last", "email", "username", "password"];

const divs = ids.map((id) => document.getElementById(id));

const submitButton = document.getElementById("submit");
const form = document.querySelector("form");
form?.addEventListener("submit", handlesubmit)

 divs.forEach((div) => div?.addEventListener("input", handlechange));

 const url = "http://localhost:3000/register"

 function handlechange(e) {
    submitButton.disabled = isAnyFieldEmpty(); 
 }
 function handlesubmit(event) {
event.preventDefault();
    const [first, last, email, username, password] = divs.map((div) => div.value);  
   const body = { first, last, email, username, password };
  const options = {
    headers: {
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(body)
  };
   fetch(url, options)
   .then((res) => res.json())
   .then(console.log)
   .catch(console.error);
 }
function isAnyFieldEmpty() {
    return divs.some((div) => div.value === "");
 }