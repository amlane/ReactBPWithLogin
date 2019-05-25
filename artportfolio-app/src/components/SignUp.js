import React from 'react';
import { connect } from 'react-redux';

import { registerNewUser } from '../actions';

class SignUp extends React.Component{
    constructor(){
    super();
    this.state = {
        registerUser: {
                username: '',
                password: ''
        }
    }
}

    inputHandler = e => {
        this.setState({ 
            registerUser: {
                ...this.state.registerUser,
                [e.target.name]: e.target.value
            }
        })
    }

    submitForm = e => {
        e.preventDefault();
        this.props.registerNewUser(this.state.registerUser)
        .then(() => {
            this.props.history.push("/user");
         });
        this.setState({ 
            registerUser: {
                username: '',
                password: ''
            }
        })
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <h2>Create New Account</h2>
                <label>Username</label>
                <input
                required
                name="username"
                value={this.state.registerUser.username}
                onChange={this.inputHandler}
                />
                <label>Password</label>
                <input 
                required
                type="password"
                name="password"
                value={this.state.registerUser.password}
                onChange={this.inputHandler}
                />
                <button>submit</button>
            </form>
        )
    }
}



export default connect(null, { registerNewUser })(SignUp);