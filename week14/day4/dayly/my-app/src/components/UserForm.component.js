import React  from "react";

export class UserForm extends React.Component {
    constructor(props) {
      super(props);
       
    }
    render() {
        return <form>
            <input type="text" placeholder="Something here" />

            <input type="submit" value= "submit" />
        </form>
    }

}