import React, { Component } from 'react'
import "../styles/homepage.css";
import Hero from "./hero"

export class hompage extends Component {
        // constructor(props){
        //     super(props)
        // }

    render() {
        return (
            <div className="homepageContainer">
                <Hero></Hero>
            </div>
        )
    }
}



export default hompage
