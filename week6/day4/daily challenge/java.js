let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const groceriesxp = (obj) => {
    const fruits = obj.fruits;
    fruits.forEach((fruit) => console.log(fruit));
};

        
    const cloneGroceries = () =>{
        let user  = client
        user = "Betty"
        const shopping  = groceries 
        shopping .totalPrice = "$35";

        shopping .other.payed = false;
        console.log("shopping", shopping )
        console.log("groceries",groceries)
        //console.log(shopping ===groceries )
    }






    groceriesxp(groceries);
    cloneGroceries();