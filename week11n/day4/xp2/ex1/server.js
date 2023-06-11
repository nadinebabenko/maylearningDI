const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
let i = 0;
app.get("/users", (req, res) => {
  const user = { firstname: "John", lastname: "Doe" };
  console.log("I'm listening", i++);
  res.send(user);
});

app.listen(3000);