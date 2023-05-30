function hotelCost() {
let user 

while (!isOnlynum (user))   {
    user = prompt("How much nights would  you   like to be in the hotel");
}
    const NumberofNights = Number(user)
    const pernight = 140
    const totalsum = NumberofNights * pernight
   console.log('total Price:', totalsum)
    return totalsum
}
function isOnlynum(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}
///hotelCost()

/////////////

function ifnotstring(str) {
const regex = new RegExp(/\d/)
return regex.test(str)
}
 const price = planeRideCost()
 console.log('price:', price)

function planeRideCost() {
    let destination = ""
    while (destination == "" || ifnotstring(destination)) {
destination = prompt ("where are you flying")
}
console.log("the destination is", destination)

if (destination === "london")  return 183
if (destination === "Paris")  return 220
return 300
}
///planeRideCost()
/////////////

function rentalCarCost() {
    let user 

    while (!isOnlynum (user))   {
        user = prompt("How many days would  you   like to rent the car")
}
const dailyprice = 40
const numberofdays = Number(user)

let discount = 0
if (numberofdays >= 10) discount =  0.05
const totalprice = dailyprice * numberofdays * (1 - discount)
console.log ('totalPrice:',totalprice)
return totalprice 
}
//rentalCarCost()

function totalVacationCost() {
const carPrice = rentalCarCost()
const hotelPrice =  hotelCost()
const planePrice = planeRideCost()

console.log('hotelPrice:' , hotelPrice)
console.log('carPrice:' , carPrice)
console.log('planePrice:' , planePrice)
}
totalVacationCost()

