const express = require("express");
const app = express();

app.use(express.static("../public"));
app.use(express.static("../public/script.js"));

app.get("/", (req, res) => {});

app.listen(5000, () => console.log("Example app listening on port 3000!"));