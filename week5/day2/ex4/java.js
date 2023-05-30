const form  = document.getElementById("myForm")
const radius = document.getElementById("radius")
const volume = document.getElementById("volume")
form.addEventListener("submit" , submit)

function submit(event) {
    event.preventDefault()
    const r = Number(radius.value);
    if (Number.isNaN(r)) return;
    const v = (4 / 3) * Math.PI * r ** 3;
    volume.value = v;

}