const express = require("express");
const app = express();

const PORT = 3000;
app.use("/form", express.static("public"));
app.use(express.json());

app.get("/aboutMe/:hobby",handlehobby);
app.get("/pic", displaypic);
app.post("/formData", handlepost)
app.listen(PORT);

function handlepost (req, res) {
res.send("")
}

function displaypic(req,res) {
    res.send("<img src = 'https://picsum.photos/200/300' />")
}

function handlehobby(req,res) {
    const hobby = req.params.hobby;
  
if (!isonlyletters(hobby)) 
return res.status(404).send("Without numbers pls");
res.send("Nice hobby");

}
function isonlyletters(str) {
    const noNumberRegex = /^[A-Za-z]+$/;
    return  noNumberRegex.test(str);
}
