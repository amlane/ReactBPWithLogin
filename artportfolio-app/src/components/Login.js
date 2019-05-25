import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    inputHandler = e => {
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    submitForm = e => {
        e.preventDefault();
        this.props.loginUser(this.state.credentials)
        .then(() => {
            this.props.history.push("/user");
        });
        this.setState({
            credentials: {
                username: '',
                password: ''
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.submitForm}>
                <h2>Log In</h2>
                <label>Username</label>
                <input 
                value={this.state.credentials.username}
                name='username'
                onChange={this.inputHandler}
                />
                <label>Password</label>
                <input 
                type='password'
                value={this.state.credentials.password}
                name='password'
                onChange={this.inputHandler}
                />
                <button>submit</button>
            </form>
        )
    }
}

export default connect(null, { loginUser })(Login);