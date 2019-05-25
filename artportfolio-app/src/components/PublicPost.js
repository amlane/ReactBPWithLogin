import React from 'react';

function PublicPost(props){
    return(
        <>
            <p>{props.post.username}</p>
            <img src={props.post.picture} alt={props.post.username} />
        </>
    )
}

export default PublicPost;