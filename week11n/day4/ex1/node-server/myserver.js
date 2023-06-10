const http = require("http");

const host = 'localhost';
const port = 3000; 
 
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("This is my first,second and the third  response  ");
    
};

const secondo = function (req, res) {
  res.writeHead(201);
    res.end("This is my second response");
 };
 const thirdo  = function (req, res) {
    res.writeHead(202);
      res.end("This is my third  response");
   };

const server = http.createServer(requestListener, secondo, thirdo);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

 