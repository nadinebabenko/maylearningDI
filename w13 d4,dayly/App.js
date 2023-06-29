import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
  };
  }
  incrementCount = () => {
     this.setState({ votes: this.state.votes++ });
  };
render() {
return(
  <>
  <h1>Vote for the language!</h1>
  <div class="languages">
  {this.state.languages.map((lang, i) => (
 <Language 
 name = {lang.name} 
 votes= {lang.votes} 
 key={i} 
 incrementCount={() =>this.incrementCount(lang.name)}  
 />
  ))}
  </div>
  </>
  );
}
}

    