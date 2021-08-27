import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export class navbar extends Component {
    render() {
        return (
            <div className="navContainer">
                <div className="topNav">
                    <div>
                        <Link>Course Registration</Link>

                        <Link>About</Link>
                        <Link>Contact us</Link>
                    </div>
                        

                </div>

                <div className="middleNav">
                    
                </div>

                <div className="bottomNav">
                    <div className='logo'>

                    </div>
                    <div>
                        <Link>Admission</Link>
                        <Link className="faculties">
                            Faculties and Departments
                            <div>
                                <Link className='facultiesAnnex' >Faculty of Business Administration 
                                    <div>
                                        <a href="">Accounting and Finance</a>
                                        <a href="">Department of Economics, Marketing and Services</a>
                                        <a href="">Department of Management</a>
                                    </div>
                                </Link>  
                                <Link className='facultiesAnnex2' href="#">Faculty of Engineering Science and Computing
                                    <div>
                                        <a href="">Department of Information Technology</a>
                                        <a href="">Department of Built Environment</a>

                                    </div>
                                </Link>
                                <Link className="facultiesAnnex3" href="#">School of Theology, Mission and Leadership
                                      <div>
                                        <a href="">Department of Theology</a>
                                        <a href="">Department of Mission</a>
                                        <a href="">Department of Leadership</a>
                                        <a href="">Centre for Ministerial Formation</a>

                                      </div>
                                </Link>
                                <a href="#">Faculty of Health and Allied Sciences</a>
                            </div>
                        </Link>
                        <Link>Courses</Link>
                      
                        <Link>Post-graduate School</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default navbar
