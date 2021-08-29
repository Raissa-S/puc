import React, { Component } from 'react'
import '../styles/Login.css'

export class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '' ,
            password: '',
            errorMessage: '',
            isLoggedIn: false
        }

        this.signIn = this.signIn.bind(this)
    }

    componentDidMount(){
        let  credUser1 = ['PUC/180108', 'PUC/180108']
        let  credUser2 = ['PUC/180000', 'PUC/180000']

        sessionStorage.setItem('credUser1', JSON.stringify(credUser1))
        sessionStorage.setItem('credUser2', JSON.stringify(credUser2))

    }

    getFields = (e) => {
        

        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

 

    signIn = (e) =>{
        e.preventDefault()

        let credUser1 = JSON.parse(sessionStorage.getItem('credUser1')) 
        let credUser2 = JSON.parse(sessionStorage.getItem('credUser2'))
        
        if(this.state.username.length < 1 || this.state.password.length < 1){
            this.setState({errorMessage: 'Please enter Username and Pin'})
            return
        }

        if(this.state.username !== credUser2[0] || this.state.password !== credUser2[0] ){
            
            
            if(this.state.username !== credUser1[0] || this.state.username !== credUser1[0]){
                this.setState({errorMessage: 'Username or password incorrect'})
            }
        }

        if(this.state.username === credUser2[0] || this.state.username === credUser2[1]){
            this.setState({isLoggedIn: true})
        }
        
        if(this.state.username === credUser1[0] || this.state.username === credUser1[1]){
            this.setState({isLoggedIn: true})
        }

   

        
        console.log(credUser2[1],credUser1)
    }

    render() {
        return (
            <form className='loginContainer'>
                <h2>Login</h2>
                <hr />
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Username</label>
                        <input name='username' onInput={this.getFields} type="email" class="form-control" id="inputEmail4" placeholder="Username" />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Pin</label>
                        <input name='password' onInput={this.getFields} type="password" class="form-control" id="inputPassword4" placeholder="Pin" />
                        </div>
                    </div>
                    <p style={{color: 'red'}}>{this.state.errorMessage}</p>
                    <button onClick={this.signIn} class="btn btn-primary">Sign in</button>
            </form>
        )
    }
}

export default Login
