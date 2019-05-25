import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';

import PublicPosts from './PublicPosts';
import NavBar from './NavBar';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import UserHomePage from './UserHomePage';

import '../styles/App.css';

class App extends React.Component {



  render(){
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path="/public-posts" component={PublicPosts} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/user' component={UserHomePage}/>
      </div>
    );
  }
}

export default App;
