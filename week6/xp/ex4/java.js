const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

//for loop

//for (let i = 0; i < colors.//length; i++){
    //const color =colors[i]
    //console.log("#" + Number(i//+1) + " the choice is " //+ color)
//}

colors.forEach(color)

function color(col, i) {
    console.log(`#${i + 1} the choice is ${col}`);
}
const violett = colors.some((col) => col ===  "Violet"  )
console.log( violett);
  
 



//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.