const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const users = gameInfo.map((user) => user.username + "!");
console.log(users)

//2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
 

//onst winners = ["becky", "susy"]
const winners = gameInfo.filter((player) => player.score > 5)
console.log(winners)

const score = gameInfo.reduce((total , player) => total + player.score, 0);
console.log(score)