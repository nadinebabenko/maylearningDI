document.getElementById("convert").addEventListener("click", handleclick)
const fromS = document.getElementById("from")
const toS = document.getElementById("to")





fetchcurr()

function fetchcurr() {
    const url = "https://v6.exchangerate-api.com/v6/e626d6d9156ec18630f4b03e/codes"
    fetch(url)
    .then  ((res)  => res.json())
    .then((res) => deopdown(res.supported_codes))
    .catch((error) =>console.error(error))
}

    function  deopdown(codes) { 
            const entries = Object.entries(codes);

            for (const entry of entries) {
            const [index, [code, name]] = entry;
            const option = document.createElement("option")
            const option2 = document.createElement("option")

            option.innerText = code + ", " + name
            option.value = code

            option2.innerText = code + ", " + name
            option2.value = code
            


            fromS.appendChild(option)
            toS.appendChild(option2)

    } 
}

async function handleclick() {
console.log(fromS.value)
console.log(toS.value)
const curr1 = fromS.value
const curr2 = toS.value
const input = document.getElementById("input")
const summ = document.getElementById("summ")

const url = `https://v6.exchangerate-api.com/v6/94f780036a3de3c6e7102cfa/pair/${curr1}/${curr2}`

try {
const res = await fetch(url)
const resJ = await res.json()
const rate = resJ.conversion_rate;
const amount = Number(input.value)
const total = amount * rate
summ.innerText = `${amount} ${curr1} = ${total}  ${curr2}`;

}catch(error){
console.error(error)
}

}
