const http = require("http");

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.hasHeader("Content-type", "application/json");
  res.end(JSON.stringify(user));
  console.log(`Server is running on http://${host}:${port}`);
});

server.listen(8080);