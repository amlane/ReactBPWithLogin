import React from 'react';
import { Route } from 'react-router-dom';

import PublicPosts from './PublicPosts';
import NavBar from './NavBar';
import Home from './Home';

import '../styles/App.css';

class App extends React.Component {



  render(){
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path="/public-posts" component={PublicPosts} />
      </div>
    );
  }
}

export default App;
