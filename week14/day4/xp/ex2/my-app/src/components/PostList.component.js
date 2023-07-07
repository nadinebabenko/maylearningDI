import React  from "react";
import posts from   "./../data/data.json"
export class Postlist extends React.Component{
    constructor(props) {
        super(props)
        console.log(posts)
    }
    render()  {
        const allPosts = posts.map((post) =>(
            <div>
                <h1>{post.title}</h1>
                <h2>{post.content}</h2>
                <p>{post.date}</p> 
            </div> 
        ));
        return allPosts
    }
}