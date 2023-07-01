import React from "react";
const cLickMe = () => alert("I Was clicked");
const handleKeyPress = (e) =>  {
    if (e.key != "Enter") return;
    const message = "Enter was pressed, the input is:" + e.target.value;
    alert(message);
}


export class Events extends React.Component{
    toggleButton = () => {
                this.setState({isToggleOn: !this.state.isToggleOn})
        console.log(this.state);
    }
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true }
    }
    render() {        
        return(
            <><p>Hello from Events components</p><button onClick={cLickMe}>Click!</button><input type="text" onKeyDown={handleKeyPress}/>
            <button onClick={this.toggleButton}>{this.state.isToggleOn ?  "ON" : "OFF"}</button>
            
             </>
        )
    }
}