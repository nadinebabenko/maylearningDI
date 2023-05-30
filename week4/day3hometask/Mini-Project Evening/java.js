function playTheGame() {
    const user = confirm("Would you like to play the game?")
        if (!user) {
        alert("No problem, goodbuy")
        return
        }
        const computerNumber = randomaly()

        let answer = prompt("Pls type a number")
        const userNumber = Number(answer)        
        while (Number(answer) != computerNumber) {
           
     if (!answernumb(answer)){
        alert ("Sorry Not a number, Goodbye")
        return
       }

       if (!inbetween(Number(answer))) {
        alert("Sorry it’s not a good number, Goodbye");
        return
       } 
       console.log(Number(answer), computerNumber)

       if (Number(answer) > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again")
}
if (Number(answer) <  computerNumber) {
    alert("Your number is smaller then the computer’s, guess again")
}
 answer = prompt("Pls type a number a number")
    }
    alert("congrats , you are the winner!!!", computerNumber)
    console.log(Number(answer), computerNumber)
}

function answernumb(str) { 
    const regex = new RegExp (/^[0-9]*$/)
    return regex.test(str)
    }

    function inbetween(number) {
        return number  >= 0 && number <= 10
    }
    function randomaly() {
        return Math.floor(Math.random() * 11)
    } 





