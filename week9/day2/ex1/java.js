function compareToTen(num) {
return new Promise((resolve,reject) =>{
if (num < 10) {
    resolve ("The num is smaller than 10")
}else {
    reject ("The num is  is greater than 10")
}
})
}
compareToTen(11)
.then((res) =>console.log(res))
.catch((err)  => console.log(err))