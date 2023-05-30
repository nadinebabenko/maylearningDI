let  numberOfbeers = Number(prompt("How much beers?"))
;
let numberOfBeerstotake = 1;

while(numberOfbeers > 0) {
    const beers = producebeer(numberOfbeers, numberOfBeerstotake);
    console.log(beers);

    numberOfbeers = numberOfbeers - numberOfBeerstotake;

    numberOfBeerstotake = numberOfBeerstotake + 1;
   
}

function producebeer(num, counter) { 
const bottleOrBottles = getBottleorBottles(num);
const beers = `${num} ${bottleOrBottles}   of beer in the Wall
${num} ${bottleOrBottles} of beer
Take ${counter} down, pass it around 
${num - counter} ${getBottleorBottles(num - counter)} of beer on the wall`;

return beers;
}

function pluralorsing(num){
if (num > 1) {
    return true;
}else {
    return false
}



}
function getBottleorBottles(num) {
    if(pluralorsing(num)) {
        return "bottles"
    }else  {
        return "bottle"
    }
}

 