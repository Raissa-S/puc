import React, { Component } from 'react'
import { Link} from 'react-router-dom'
export class hero extends Component {
    constructor(props){
        super(props)

        this.state = {
            courosel: ['heroContainer','courosel2','courosel3'],
            counter: 0
        }
    }

    componentDidMount(){
        this.slideImage()
    }

    slideImage = () =>{
        setInterval(() => {
           
           
           let heroCont = document.querySelector('#hero')
           heroCont.className = this.state.courosel[this.state.counter]
           this.setState({counter: this.state.counter + 1})

           if(this.state.counter > 2 ){
            this.setState({counter : 0})
            }
        }, 3000);
    }

    render() {
        return (
            <div id='hero' className='heroContainer' >
                <div className='heroTexts'>
                <div className='description'>
                    
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
