//const promise = new Promise((resolve,reject) => {
   // setTimeout(() => resolve ("success"), 4000)
//})
const promise = Promise.resolve(
setTimeout(() => {
    console.log("success")
}, 4000)
);

promise
.then((res) =>console.log(res))
.catch((err) =>console.error("Ooops something went wrong" , err))