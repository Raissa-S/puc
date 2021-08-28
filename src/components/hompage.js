import React, { Component } from 'react'
import "../styles/homepage.css";
import Hero from "./hero"
import MiddleSection from './middle'

export class hompage extends Component {
        // constructor(props){
        //     super(props)
        // }

    render() {
        return (
            <div className="homepageContainer">
                <Hero></Hero>
                <MiddleSection></MiddleSection> 
            </div>
        )
    }
}



export default hompage
