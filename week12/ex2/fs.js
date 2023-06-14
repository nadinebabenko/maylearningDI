const  fs = require("fs/promises");

fs.readFile("./hello.txt", { encoding: "utf8" })
.then((res) => console.log(res))
.catch(console.error);

fs.writeFile("goodbye.txt", "Goodbye everyone");
fs.appendFile("goodbye.txt", "\nSee ya soon");
fs.unlink("goodbye.txt");

