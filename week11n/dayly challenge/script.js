const http =  require("http");
const { largeNumber , getDate } =   require("./main.js")
const server = http.createServer(handleresponse);
const port = 3000;
const host = "localhost"
getDate(); 
function hello() {
    console.log("Server is listening  on port", port)
}

function handleresponse(req, res) {
 res.setHeader('Content-type', 'text/html');
res.writeHead(201);
//res.end("The large num is:" + largeNumber);
//}
res.end(` 
<p>The current date and time are :${getDate()}</p>


`);
}




server.listen(port ,host,hello)

