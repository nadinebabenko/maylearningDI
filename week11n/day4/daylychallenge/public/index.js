const form = document.querySelector("form");
form.addEventListener("submit", handlesubmit)

function handlesubmit(event) {
    event.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const body = {
        email:email,
        message:message
    };   

    fetch("/formData", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
      })
   .then(res => res.json())
   .then(res =>res.console.log)
   .catch(err => console.error( err))
}
function displayResponse(res) {
    document.getElementById("messages").innerHTML = res;
  }