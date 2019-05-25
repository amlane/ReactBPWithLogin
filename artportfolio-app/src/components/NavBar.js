import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/public-posts">Posts</Link>{' '}
            <Link to='/signup'>Sign Up</Link>{' '}
            <Link to='/login'>Log In</Link>
        </nav>
    )
}

export default NavBar;