function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//1)we are calling the func asyncCall();
// then we console.log('calling');
//we return the promise , then it is console.log the result
//then goes the function resolveAfter2Seconds , it takes the promise where we are to wait 2 seconds after resolving the result