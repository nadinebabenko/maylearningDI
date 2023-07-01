import React from "react";


export class Phone extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };

    }
    changeColor = (e) =>  this.setState({color: "blue"})   
     
    render() {
        return ( 
        <>
        <h2>The phone company is {this.state.brand}</h2>
        <h3>It is a {this.state.color} {this.state.model} from {this.state.year}</h3>
        <button onClick={ this.changeColor }>Change Color</button>
        </>
        )   
    }
}