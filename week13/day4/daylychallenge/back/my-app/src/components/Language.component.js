import React from "react";
import "./Language.component.css";

 export class Language extends React.Component {
    constructor(props) {
    super(props);
    }
    handleclick =() =>{
        console.log("click")
    }

    render() {
      return (
        <>
         <div className="language">
            <span>{this.props.votes}</span>
            <span>{this.props.name}</span>
            <button onClick={this.props.incrementCount}> Click here </button>
            </div>
            </>
          );
       }
  }