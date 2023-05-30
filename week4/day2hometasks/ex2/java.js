
//Create a function named calculateTip() that takes no parameter.
 
function calculateTip(){ 
    const bill = Number(prompt ("John , please enter the bill amount"))
    let tip
    
    if (bill < 50)     tip = 0.2
    if (bill > 50 && 200) tip = 0.15
    if (bill >   200)      tip = 0.10

    const tipP = bill * (1 + tip)

    console.log("tip amount:" , tipP);
    console.log("bill:" , bill);
    
}
  calculateTip();

//If the bill is less than $50, tip 20%.
//If the bill is between $50 and $200, tip 15%.
//If the bill is more than $200, tip 10%.

//Console.log the tip amount and the final bill (bill + tip).

//Call the calculateTip() function.