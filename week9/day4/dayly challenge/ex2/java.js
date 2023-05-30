const form = document.querySelector("form")
form.addEventListener("submit" , handling)

function handling(event) {
    event.preventDefault()
    console.log(form.elements)
    const [city1lat , city1long ,city2lat ,city2long ] = [...form.elements].map((input)=> input.value)
   
const url1 = `https://api.sunrise-sunset.org/json?lat=${city1lat}&lng${city1long}`

const url2 = `https://api.sunrise-sunset.org/json?lat=${city2lat}&lng=${city2long}`

const promise1 = fetch(url1)
const promise2 = fetch(url2)
Promise.all([promise1.then((res) =>res.json()) , promise2.then((res)=>res.json())]).then((res) =>console.log(res))
.catch((err) =>console.error(err))

}