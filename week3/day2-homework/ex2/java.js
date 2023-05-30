//Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

const myWatchedSeriesLength = myWatchedSeries.length;

console.log ('myWatchedSeriesLength:', myWatchedSeriesLength );

//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory

//const myWatchedSeriesSentence = myWatchedSeries[0] + " " + myWatchedSeries[1]  + " " + "and" + " "  + myWatchedSeries [2];

//console.log (myWatchedSeriesSentence);

const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and  ${myWatchedSeries[2]}`
console.log (myWatchedSeriesSentence);



//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory

const sentence  = `I watched  ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence} `
console.log (sentence);

 
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends"
console.log (myWatchedSeries); 

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push ("How I met your mother")
console.log (myWatchedSeries);


//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift ("Tudors")
console.log (myWatchedSeries);  
//Delete the series “black mirror”.
delete myWatchedSeries[0];
console.log (myWatchedSeries);  
//Console.log the third letter of the series “money heist”.
const MoneyHeist = myWatchedSeries[2];
console.log(MoneyHeist[2]); 
//  console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log (myWatchedSeries); 