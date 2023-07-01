import React from "react";
import { Garage } from "./Garage.component";
const carinfo = {name: "Ford", model: "Mustang"};

export class Car extends React.Component {
    constructor() {
        super(); 
        this.state= { color: "red" };
    }
render(){
return (
    <>
    <header>This is a {carinfo.model}</header>
    <p>This car is { this.state.color}</p>
    <p>Garage Component:</p>
    <Garage  size = "medium" />

    </>
)
}
}
 