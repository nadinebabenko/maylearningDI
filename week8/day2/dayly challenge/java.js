const form = document.querySelector("form").addEventListener("submit",func)

function func(e){
    e.preventDefault()
    const formData =  new FormData (document.querySelector("form"))


    const entries = formData.entries()
    const newdaata = Object.fromEntries(entries)
    const string = JSON.stringify(newdaata)
    const p = document.createElement("p")
    p.innerHTML= string
    document.body.appendChild(p)
}