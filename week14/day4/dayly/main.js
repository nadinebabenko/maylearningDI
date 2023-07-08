const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3001;
app.use(cors());
app.use(express.json())

app.get("/api/hello", (req, res) => res.send("Hello from Express"));
app.post("/api/world", (req, res) => {
    res.send({ message: "You send the object", body:req.body})
})

app.listen(PORT, () => {
    console.log("listening on port", PORT)
})