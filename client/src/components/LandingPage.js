import React from 'react';
import CreatePost from './CreatePost';
import ListPosts from './ListPosts';

const LandingPage = () => {
    return(
        <div className="container pt-3 mb-5">
            <h1>Twitter Clone</h1>
            <CreatePost />
            <ListPosts />
        </div>
    )
}

export default LandingPage;