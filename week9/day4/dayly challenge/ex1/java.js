const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

const all = [promise1, promise2, promise3]
Promise.all(all)
.then((res) => console.log(res))
.catch((err) => console.error(err))