import React from 'react'; 
import { ErrorBoundary } from './components/ErrorBoundary.component';

 
export class App extends React.Component { 
  handleClick = async () => {
    const url = "https://webhook.site/d6a1db95-42a5-45e3-b3dc-b44f39a66808";
    try {
      
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27 
      }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        } 
        body: JSON.stringify(body);

        }
        const res = await fetch(url, options); 
      } catch(err) {
        console.error(err);
      } 
    } 
  render(){
    return (
      <ErrorBoundary>
        <button onClick={this.handleClick}>Post Data</button>
    
      </ErrorBoundary>
      
      )
  }
}
 