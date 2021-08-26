import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export class navbar extends Component {
    render() {
        return (
            <div className="navContainer">
                <div className="topNav">
                    <div>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                        <Link>Link</Link>
                    </div>
                        

                </div>

                <div className="middleNav">
                    
                </div>

                <div className="bottomNav">
                    <div>
                        <Link>About</Link>
                        <Link>Admission</Link>
                        <Link>Course Registration</Link>
                        <Link>Faculties</Link>
                        <Link>Profession Sites</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default navbar
