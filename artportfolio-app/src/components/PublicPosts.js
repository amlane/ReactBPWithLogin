import React from 'react';
import axios from 'axios';

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
            <div>This is home page</div>
            <div>{this.state.publicPosts.map( post => {
                return (
                <>
                   <p>{post.username}</p>
                   <img src={post.picture} alt={post.username} />
                </>
                )

            } )}</div>
            </>
        )
    }
}

export default PublicPosts;