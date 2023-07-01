import React from "react";

export class Color extends React.Component{
   constructor(props)  {
    super(props)
    this.state = { favouriteColor: "red"} 
   }
   changeColor = () => {
    this.setState({ favouriteColor: "blue"})
   }
   render(){
    return (
        <>
         <h1>my favourite color is {this.state.favouriteColor}</h1>
         <button onClick={ this.changeColor }> Change color to blue</button>        
        </>
        ) 
   }
   componentDidMount() {
    setTimeout(() => {
       this.setState({ favouriteColor: "yellow" }) 
    }, 3000);
   }
}