import React, { Component } from 'react'
import '../styles/footer.css'

export class footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerCenter'>
                    <div className="footerSection"><h6>ADMISSIONS</h6></div>
                    <div className="footerSection"><h6>ABOUT</h6></div>
                    <div className="footerSection"><h6>CONTACT</h6></div>
                </div>
            </div>
        )
    }
}

export default footer
