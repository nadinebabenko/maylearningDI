const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", log);
xhr.open("get", url);
xhr.send();

function log(e) {
    const response = JSON.parse(xhr.response)
    const first = response.data[0]
    console.log(first)
}