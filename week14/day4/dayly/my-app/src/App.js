import React  from "react";
 

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: null }; 
  }
  
  async  componentDidMount() {
    const url = "http://localhost:3001/api/hello";

    try { 
      const resText = await fetch(url);
      const res = await resText.text();
      this.setState({ message: res});

    } catch (err) {
      console.error(err)
    }
  }
 render() {
  return (
    <>
    <UserForm />
    <div> Message: {this.state.message}</div>
    
    </>
  )
 }



}