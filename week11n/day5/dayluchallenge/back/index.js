const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;
const users = [];

app.use(express.json());
app.use(cors());

app.post("/register", createuser);


app.listen(PORT, () => console.log("Listening on port" + PORT));

function createuser (req, res) {
console.log("request received", req.body);
if (!isRequestValid()) return res.status(400).send({ message: "Please fill in all information "});
const newuser = {
username:req.body.username,
password:req.body.password    
};
users.push(newuser);
res.send({ message: "User created", user: newuser.username });
}

function isRequestValid(body) {
const { first, last, email, username, password } = body;
if (isAnyFieldEmpty([first, last, email, username, password])) return false;
if(password.length < 8)return false;
if (!email.includes("@")) return false;
return true;
}
function isAnyFieldEmpty(inputs) {
    return inputs.some((input) => input === "" || input === null);


}