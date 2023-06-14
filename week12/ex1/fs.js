const fs = require("fs/promises");
fs.readFile("./hello.txt", { encoding: "utf8" })
.then(res => console.log(res))
.catch(console.error);

