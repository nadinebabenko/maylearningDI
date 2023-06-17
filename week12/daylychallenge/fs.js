const fs = require("fs");
const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");
let position = 0;
let step = 0;
let stepoffirstminusone = null;
for (const character of characters) {
    if(character === "<") {
        position = position - 1;
    } else if (character === ">") {
        position = position + 1;
     }else {
        
    } step ++;
    if (position === -1 && stepoffirstminusone === null) {
        stepoffirstminusone = step;
        console.log("we hit -1! The step is:", stepoffirstminusone)
    }
}


let  leftotRight;
if (position < 0) {
    leftotRight = "to the left";
} else if (position >  0) {
    leftotRight = "to the right";
}else {
    leftotRight = ""
}
console.log(`${Math.abs(position)} steps ${leftotRight}`);





