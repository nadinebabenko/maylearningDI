let clickWith = false;
const arrObjects = [
  {
    id: 0,
    author: `Andrey Kurpatov`,
    quote: `"You don't control your behavior, you don't control your thoughts, but you are this behavior, you are these thoughts of yours."`,
  },
  {
    id: 1,
    author: "Ayn Rand",
    quote: `"There's nothing more important in life than how you do your job."`,
  },
  {
    id: 2,
    author: "Yuval Noah Harari",
    quote: `"Egoism is the highest form of altruism."`,
  },
  {
    id: 3,
    author: "George Orwell",
    quote: `"If you are in the minority and even in the singular it does not mean that you are insane."`,
  },
];
let max = 0;
for (let i = 0; i < arrObjects.length; i++) {
  max < arrObjects[i].id ? (max = arrObjects[i].id) : "";
}

// 4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
arrMain = [];
arrQuote = [];
// array with quotes of arrObjects
(function () {
  arrObjects.forEach((item) => {
    QuoteObject = {};
    QuoteObject.quote = item.quote;
    QuoteObject.author = item.author;
    QuoteObject.lengthWithSpace = item.lengthWithSpace;
    QuoteObject.lengthWitoutSpace = item.lengthWitoutSpace;
    QuoteObject.NumberOfWords = item.NumberOfWords;
    arrQuote.push(QuoteObject);
  });
})();
console.log(arrQuote);

function randomQuote() {
  //   generate random qoute
  function random() {
    let rand = Math.floor(Math.random() * arrQuote.length);
    return arrQuote[rand];
  }
  arrMain.push(random());
  console.log(arrMain);
  // create array with random quotes

  // Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
  //   create function which make not repeat quotes in row
  function forArrMain(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i + 1, 1, random());
      }
    }
    for (let y = arr.length; y > 0; y--) {
      if (arr[y] === arr[y - 1]) {
        arr.splice(y - 1, 1, random());
      }
    }
    return arr;
  }
  forArrMain(arrMain);
  console.log(arrMain);
  //   sentence = "";
  const div = document.createElement("div");
  const spanForQoute = document.createElement("span");
  spanForQoute.setAttribute("class", "spanForQoute");
  const spanForAuthor = document.createElement("span");
  // const insideWithSpace = document.createElement("span");
  spanForAuthor.style.color = "rgb(100, 182, 172)";
  const buttonLike = document.createElement("button");
  buttonLike.innerHTML = "like";
  // let like = 0;
  arrMain.forEach((item) => {
    // sentence = sentence + item + "\\";
    spanForQoute.innerHTML = item.quote;
    spanForAuthor.innerHTML = item.author;

    div.appendChild(spanForQoute);
    div.appendChild(spanForAuthor);
  });
  console.log(arrMain);
  //   console.log(sentence);
  document.querySelector(".placeQuote").appendChild(div);
  //   document.querySelector(".placeQuote").innerHTML = sentence;
}
function random() {}
const buttonGenerateQoute = document.querySelector(".generateQuote");
buttonGenerateQoute.addEventListener("click", randomQuote);

let newId = max;
const addButton = document.querySelector(".addButton");
const author = document.querySelector(".author");
const quote = document.querySelector(".qoute");
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  newObject = {};
  newId = newId + 1;
  newObject.id = newId;
  newObject.quote = quote.value;
  newObject.author = author.value;
  console.log(newObject);
  arrObjects.push(newObject);
  console.log(arrObjects);
});
const buttonInsideWithSpace = document.querySelector(".insideSpace");
const placeQoute = document.querySelectorAll(".placeQuote > .spanForQoute");
let lengthLine = 0;
buttonInsideWithSpace.addEventListener("click", function (e) {
  e.preventDefault();

  clickWith = true;
  for (let i = 0; i < arrObjects.length; i++) {
    for (let y = 0; y < arrObjects[i].quote.length; y++) {
      console.log(arrObjects[i].quote.length);
    }
    arrObjects[i].lengthWithSpace = arrObjects[i].quote.length;
  }
  console.log(arrObjects);
});

const buttonInsideWithoutSpace = document.querySelector(".insideWithoutSpace");
buttonInsideWithoutSpace.addEventListener("click", function (e) {
  e.preventDefault();

  for (let i = 0; i < arrObjects.length; i++) {
    space = 0;
    for (let y = 0; y < arrObjects[i].quote.length; y++) {
      //   console.log(arrObjects[i].quote.length);

      if (arrObjects[i].quote[y] === " ") {
        space++;
        result = arrObjects[i].quote.length - space;
      
      }
    }

    arrObjects[i].lengthWitoutSpace = arrObjects[i].quote.length - space;
  }
  console.log(arrObjects);
});
const numberOfWords = document.querySelector(".numberOfWords");
numberOfWords.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < arrObjects.length; i++) {
    arrWords = [];
    numberWordsInQoute = 0;
    // console.log(arrObjects[i]);
    for (let y = 0; y < arrObjects[i].quote.length; y++) {
     
      arrWords = arrObjects[i].quote.split(" ");
    }
    arrWords.forEach((item, number) => (numberWordsInQoute = number + 1));
    arrObjects[i].NumberOfWords = numberWordsInQoute;
 
  }
  console.log(arrObjects);
});