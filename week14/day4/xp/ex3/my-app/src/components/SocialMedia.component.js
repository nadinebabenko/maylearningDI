import React from "react";
import posts from "./../data/data.json"

export class SocialMedia extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const media = posts.SocialMedias.map((media => <li>{media}</li>))
    return media;
    }
}