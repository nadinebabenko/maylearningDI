const nameElement = document.getElementById("name")
const heightElement = document.getElementById("height")
const genderElement = document.getElementById("gender")
const birthyearElement = document.getElementById("birthyear")
const homeworldElement = document.getElementById("homeworld");
/////
async function userdata(id){
const url = "https://www.swapi.tech/api/people/" + id 
document.getElementById("error").classList.remove("show");
    document.getElementById("error").classList.add("hide");
  

try { const res = await  fetch(url)
const resJson = await res.json()
const {name, height, gender, birth_year, homeworld} = resJson.result.properties
const homeworldN =  await fetchHome(homeworld)
display(name, height, gender, birth_year, homeworldN)
}catch(error) {
    console.error(error)
    document.getElementById("error")?.classList.add("show");
    document.getElementById("error")?.classList.remove("hide");
    [nameElement, heightElement, genderElement, birthyearElement, homeworldElement].forEach(
        (el) => {
        el.classList.remove("show")
        el.classList.add("hide")
    }
    )
}
}
function display(name, height, gender, birth_year, homeworld) {


 nameElement.innerText = "Name:" + name
 heightElement.innerText = "Height:" + height
 genderElement.innerText = "Gender:" + gender
 birthyearElement.innerText = "Birth year:" + birth_year
 homeworldElement.innerText = "Homeworld:" + homeworld
}



async function fetchHome(homeworld){
try {
const res = await fetch (homeworld);
const resJson = await res.json();

const homeworldN = resJson.result.properties.name;
return homeworldN
}catch(error){
    console.error(error)
}
}

document.getElementById("button")?.addEventListener("click", handleclick)


function handleclick(e){
    const randomid = getrandomid() //990
    userdata(randomid)
}


function getrandomid() {
const maxnum = 83;
return Math.floor(Math.random() * maxnum + 1)
}



