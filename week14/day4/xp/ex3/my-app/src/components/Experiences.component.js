import React from "react";
import posts from "./../data/data.json"

export class Experiences extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const experiences =  posts.Experiences .map((xp) => <p>{xp.companyName}</p>)
        return experiences
    }
}