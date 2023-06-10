const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, Nadya is here)')
})

app.listen(port, () => {
  console.log(`My express is listening on port ${port}`)
})