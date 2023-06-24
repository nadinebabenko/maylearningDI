//2import React from "react";

//export function App() {
 // const message = <h1>I do not use JSX</h1>;
 //const sum = 5 + 5 
   //const myelement = <h1>React is { sum } times better with JSX</h1>;
   
   //return myelement
//}

//ex3 
export function App() {
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
return(
  <>
  <h3>{user.firstName}</h3>
  <h3>{user.lastName}</h3> 
  <UserFavoriteColors favourites={user.favAnimals} /> 
  </>
);
}

function UserFavoriteColors(props) {
 
const favourites =props.favourites
  return  favourites.map((favourite, i) =><li key={i}>{favourite}</li>)
}