
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

<h4><p>The Graduate School is at the centre of PU’s mission for intellectual development, creative innovation and academic excellence,
     aiming at providing the cutting-edge knowledge and skills in research and scholarly enquiry.</p></h4>
<h5>The Graduate School runs the following programmes:</h5>

                            <div className="programme">
                                <Link>MCom Taxation</Link>
                            </div>
                            <div className="programme">
                                <Link>MCom Microfinance</Link>
                            </div>
                            <div className="programme">
                                <Link>MCom Applied Accounting</Link>
                            </div>
                            <div className="programme">
                                <Link>MBA Finance</Link>
                            </div>
                            <div className="programme">
                                <Link>MBA Marketing</Link>
                            </div>
                            <div className="programme">
                                <Link>MBA Entrepreneurship</Link>
                            </div>
                            <div className="programme">
                                <Link>MBA Project Management</Link>
                            </div>
                            <div className="programme">
                                <Link>MBA Human Resource Management</Link>
                            </div>  
                            <div className="programme">
                                <Link>MBA Logistics and Supply Chain Management</Link>
                            </div>
                            <div className="programme">
                                <Link>M. A. Pentecostal Studies</Link>
                            </div>
                            <div className="programme">
                                <Link>MSc. Health Planning, Policy and Management</Link>
                            <p>In collaboration with Buckinghamshire New University – UK (1 Year)</p>
                            </div>   
                            <div className="programme">
                                <Link>MSc. International Accounting & Finance</Link>
                                <h6>In collaboration with the University of Salford – UK (1 Year)</h6>
                            </div>   
                            <div className="programme">
                                <Link>MSc. Accounting and Finance</Link>
                            </div>   
                            <div className="programme">
                                <Link>MSc. Management</Link>
                            </div>   
                                         
                           
                    </div>
                    
                    

                </div>
            </div>
        )
    }
}

export default courses
