const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

 
function myBill(){
for (const item of shoppingList) {


  const quantantyinstock = stock [item]

  if (quantantyinstock > 0) {
    const price = prices[item]
    console.log ('the price of ' , item ,  "is " , price )
  }  else {
    console.log ("there is no" , item ,  "in stock"  )
  }
}

}
myBill()