import React from 'react';
import axios from 'axios';

import PublicPost from './PublicPost';

class PublicPosts extends React.Component{
    state = {
        publicPosts: []
    }

    componentDidMount(){
        axios
        .get(`https://web17-artfolio.herokuapp.com/api/posts/`)
        .then( res => {
            console.log('response: ', res)
            this.setState({ 
                publicPosts: res.data
            })
        })
        .catch( err => {
            console.log(err)
        })
    }

    render(){
        return (
            <>
            <div>{this.state.publicPosts.map( post => {
                return (
                <PublicPost post={post} key={post.id} />
                )

            } )}</div>
            </>
        )
    }
}

export default PublicPosts;