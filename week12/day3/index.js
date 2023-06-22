const  Parser = require("rss-parser");
const  parser = new Parser();
const url = "https://thefactfile.org/feed/";
const express = require("express")
const app = express();
app.set("view enjine", "ejs")
app.use(express.json());


const PORT = 3000;
app.get("/", renderFeed);
app.get("/search", searchFeed);
app.post("/search/title", searchFeed);
app.post("/search/category", searchFeed);

app.listen(PORT, ()=> console.log("listening  on port", PORT))
let items = [];

populateitems();



async function populateitems() {
    const  feed = await parser.parseURL(url);
    items = feed.items;
}

function searchFeed(req, res) {
    const body = req.body
  const title = body?.title
  const category = body?.category;
  if(category == null && title == null) {
return res.render("index.ejs",  {items: items})
  }
 
  const itemsToReturn = 
  title == null ? getPostsInCategory(category): getPostsThatContainTItle(title);
    res.render("index.ejs", { items:  itemsToReturn });    
    }

    function getPostsInCategory(category) {
        return items.filter((item) => {    
            const categories = item.categories;
            const lowerCaseCAtegories = categories.map((el) => el.toLowerCase());
            console.log(lowerCaseCAtegories);
           return  lowerCaseCAtegories.includes(category.toLowerCase());
    });
}

function getPostsThatContainTItle(title) {
return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
}


function renderFeed(req, res) {
res.render("index.ejs", { items });
}

//async function sendFeed(req, res) {
   // const  feed = await parser.parseURL(url);
    //const title = feed.title;
   // const description =  feed.description;
   // const items =  feed.items;
   // res.send({ title, description, //items });
//}


 //run();
//async function run() {
//console.log(feed.title);
//feed.items.forEach((item) => {
   /// console.table(feed);
//})
 //};