const express = require("express");
const app = express();
app.get("/:id", (req, res) => {
  const idObj = {
    ID: req.params.id,
  };
  console.log("req.params: ", req.params);
  res.send(idObj);
});
app.listen(3000);