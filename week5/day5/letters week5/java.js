<<<<<<< HEAD
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type text");
form.appendChild(input);
document.body.appendChild(form);



// 2. Hint: use one of the following events to remove any character that is not a letter



var checkInput = form.addEventListener("submit", function (event) {
  event.preventDefault();
  var valueHere;
  if (input.value.length < 1) {
    alert("Please fill the table !");
  }
  if (Number(input.value)) {
    alert("ups , smth went wrong  , pls try again) ");
  } else {
    for (let i = 0; i < input.value.length; i++) {
      if (
        input.value[i] < "A" ||
        (input.value[i] > "Z" && input.value[i] < "a") ||
        input.value[i] > "z"
      ) {
        valueHere = input.value[i];
        console.log(input.value[i]);
      }
    }
    input.value = input.value.replace(valueHere, "");
  }
});
input.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    checkInput;
  }
=======
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type text");
form.appendChild(input);
document.body.appendChild(form);



// 2. Hint: use one of the following events to remove any character that is not a letter



var checkInput = form.addEventListener("submit", function (event) {
  event.preventDefault();
  var valueHere;
  if (input.value.length < 1) {
    alert("Please fill the table !");
  }
  if (Number(input.value)) {
    alert("ups , smth went wrong  , pls try again) ");
  } else {
    for (let i = 0; i < input.value.length; i++) {
      if (
        input.value[i] < "A" ||
        (input.value[i] > "Z" && input.value[i] < "a") ||
        input.value[i] > "z"
      ) {
        valueHere = input.value[i];
        console.log(input.value[i]);
      }
    }
    input.value = input.value.replace(valueHere, "");
  }
});
input.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    checkInput;
  }
>>>>>>> 1c8215219c388d497f940916b93884b81126c27a
});