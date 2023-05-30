//Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//an item price
//and an array representing the amount of change in your pocket.

function changeEnough (itemPrice, amountOfChange){
    console.log ("the item price is", itemPrice)
    const sum = calcucatesum(amountOfChange)
    return  (sum > itemPrice)
     //{
       // console.log ("you can afford it")
       // return true
    //}else {
       // console.log ("you  can  //not afford it")
        //return false
   // }
}
function calcucatesum (arr) {
    let sum = 0

  for (let i = 0; i < arr.length; i++) {
    let coinvalue 
    const numberofcoins = arr[i]
     if (i === 0) {coinvalue = 0.25}
     if (i === 1) {coinvalue = 0.10}
     if (i === 2) {coinvalue = 0.05}
     if (i === 3) {coinvalue = 0.01}
     console.log ("we have", numberofcoins, "coins which have a value of", coinvalue)
     sum = sum + numberofcoins * coinvalue
  }
  console.log ("you own", sum)

return sum
}
//calcucatesum ([25,20,5,0])
changeEnough(4.25, [25, 20, 5, 0])