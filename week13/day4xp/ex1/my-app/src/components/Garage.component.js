import React from "react";

export class Garage extends React.Component {
    constructor(props){
        super(props)
        console.log(props)

    }
render() {
    return(
    <p>Who lives in my {this.props.size} garage?</p>
    )
}
}