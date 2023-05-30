
function isDivisible() {
let sum = 0
for (let i = 0;i < 500; i++) {
    console.log(i)
if (i % 23 === 0) sum = sum + i
}
console.log ("the sum of devisable numbers by 23:" , sum)
}

isDivisible()


//In the function, loop through numbers 0 to 500.

//Console.log all the numbers divisible by 23.

//At the end, console.log the sum of all numbers that are divisible by 23.