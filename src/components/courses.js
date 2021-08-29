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
                                <Link>B.A. Communication Studies</Link>
                                <h4>Economics, Marketing and Services (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.A. Theology and Mission</Link>
                                <h4>Theology and Mission (Faculty of Theology and Mission)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Actuarial Science</Link>
                                <h4>Information Technology (Faculty of Engineering Science and Computing)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Accounting)</Link>
                                <h4>Accounting and Finance (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Banking & Finance)</Link>
                                <h4>Accounting and Finance (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Corporate & Business Development Studies)</Link>
                                <h4>Management (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Human Resource Management)</Link>
                                <h4>Management (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Insurance with Actuarial Science)</Link>
                                <h4>Accounting and Finance (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Logistics and Supply Chain Management)</Link>
                                <h4>Economics, Marketing and Services (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Business Administration (Marketing)</Link>
                                <h4>Economics, Marketing and Services (Faculty of Business Administration)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Construction Technology and Engineering Management</Link>
                                <h4>Built Environment (Faculty of Engineering Science and Computing)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Information Technology</Link>
                                <h4>Accounting and Finance (Faculty of Engineering Science and Computing)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Midwifery</Link>
                                <h4>Nursing and Midwifery (Faculty of Health and Allied Sciences)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Nursing</Link>
                                <h4>Nursing and Midwifery (Faculty of Health and Allied Sciences)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Physician Assistantship Studies – Medical</Link>
                                <h4>Physician Assistantship – Medical (Faculty of Health and Allied Sciences)</h4>
                            </div>
                            <div className="programme">
                                <Link>B.Sc. Quantity Surveying and Building Economics</Link>
                                <h4>Built Environment (Faculty of Engineering Science and Computing)</h4>
                            </div>
                            <div className="programme">
                                <Link>Bachelor of Commerce (Accounting with Computing)</Link>
                                <h4>Accounting and Finance (Faculty of Business Administration)</h4>
                            </div>
                           
                    </div>
                    
                </div>
        
            </div>
        )
    }
}

export default courses
