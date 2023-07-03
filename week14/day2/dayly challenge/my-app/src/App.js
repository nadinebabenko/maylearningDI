import React from "react";
import { UserForm } from "./components/Form.component";
import { Summary } from "./components/Summary.component";
import "./App.css"

export class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.state= {
      firstName: "Nadya",
      lastName:"Babenko",
      age: 28,
      gender:"female",
      destination:"Japan"
    }
  }
  render() {
    return (
      <>
     <UserForm info={this.state}/>
     <Summary info={this.state} />
    </>
  ) 
}
  }
   
  
    
  