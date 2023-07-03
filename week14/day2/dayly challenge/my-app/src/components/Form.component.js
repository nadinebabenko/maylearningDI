import React from "react";
export class UserForm extends React.Component{
    constructor(props){
        console.log(props)
        super(props)
    }
    render(){
        return <>
        <form method="post" action="/" id="form">
            <input type="text" name="firstname"  value={this.props.info.firstName} />
            <input type="text" name="lastname"   value={this.props.info.lastName} />
            <input type="text" name="age" placeholder="Age" value={this.props.info.age} />

            <label htmlFor="gender1">Male</label>
            <input type="radio" name="male" value="Male" id="gender1" defaultChecked/>
            <label htmlFor="gender2">Female</label>
            <input type="radio" name="female" value="Female" id="gender2"  />


            <label htmlFor="destination">Destination: </label>
            <select name="destination" id="destination">
                <option selected={false} value="thailand">Thailand</option>
                <option selected={true} value="japan">Japan</option>
                <option selected={false} value="brazil">Brazil</option> 
            </select>
            <p> Dietary restrictions</p>
            <label htmlFor="id1">Nuts free</label>
            <input type="checkbox" name="nonuts"   id="diet1"></input>

            <label htmlFor="id2">Lactose free</label>
            <input checked={true} type="checkbox" name="nolactose"  id="diet2" />

            <label htmlFor="id3">Vegan</label>
            <input type="checkbox" name="vegan"  id="diet3" />

            <input type="submit" value="Submit"  /> 

        </form>
        </>
    }
}