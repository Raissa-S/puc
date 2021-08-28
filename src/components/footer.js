import React, { Component } from 'react'
import '../styles/footer.css'

export class footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerCenter'>
                    <div className="footerSection"><h4>ADMISSIONS</h4></div>
                    <div className="footerSection"><h4>ABOUT</h4></div>
                    <div className="footerSection"><h4>CONTACT</h4></div>
                </div>
            </div>
        )
    }
}

export default footer
