const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color,index) => {
    const newind = index+ 1
    console.log(`${newind}${order(newind)} choise is ${color}`)
})

function order(index) {
    return (index === 1 ||index ===  2 ||index === 3 )   ? ordinal[index]
   : ordinal[0] 
}
