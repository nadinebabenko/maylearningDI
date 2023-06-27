const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;
const items = [];

app.use(express.json());
app.use(cors());
app.post("/items", postItem);
app.get("/items", getItems)

app.listen(PORT, () => console.log("listening on " + PORT));
function getItems(req, res) {
    res.send(items)
}



function postItem(req, res) {
const { body } = req;
const { item , quantity } = body;


const productInItems = getProfuctFromItems(item);
if(productInItems == null) {
    const objectToSave =  { item, quantity: Number(quantity) };
    items.push(objectToSave)
    res.send(objectToSave);

}else {
    productInItems.quantity += Number(quantity);
    res.send(productInItems);
}
 

}

function getProfuctFromItems(item) {
return items.find((el) => el.item === item);
}