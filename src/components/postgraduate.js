import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../styles/courses.css'

export class courses extends Component {

    render() {
        return (
            <div className='coursesContainer'>
                <div className="imagesHeader">
                     <div>{this.props.title}</div>                 
                </div>

                <div className="courseLinksContainer">
                    <div className='courseLinksContainerMargin'>

                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                            <div className="programme">
                                <Link>Course Name</Link>
                                <h4>Description</h4>
                            </div>
                           
                    </div>
                    
                    

                </div>
            </div>
        )
    }
}

export default courses
