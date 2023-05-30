 
let bankAmount = 0

 
const vat = 0.17
 const details = ["+200", "-100", "+146", "+167", "-2900"]



const currentbankAccount = vating(details)
console.log(currentbankAccount)


function vating(expencses) {
    let total = 0

    expencses.forEach((expense) => {
   const numexp = Number(expense)
   const expvat = numexp * (1 + vat)
   total += expvat

})
return total
}
