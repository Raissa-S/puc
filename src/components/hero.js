import React, { Component } from 'react'
import { Link} from 'react-router-dom'
export class hero extends Component {
    render() {
        return (
            <div className='heroContainer' >
                <div className='heroTexts'>
                <div className='description'>
                    text
                </div>
                    <div className="heroLinks">
                        <Link>link1</Link>
                        <Link>Link2</Link>
                        <Link>Link3</Link>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default hero
