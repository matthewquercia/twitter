import React, {Fragment, useState} from 'react';

class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newPost: false,
            description: ""
        };
    }

    showNewPost = () => {
        this.setState({newPost: true});
    }

    hideNewPost = () => {
        this.setState({description: "", newPost: false});
    }

    updateDescription = (val) => {
        this.setState({description: val});
    }

    createNewPost = async (e) => {
        e.preventDefault();
        //ensure the size of the post is less than the required size for the database column
        const concatenated = this.state.description.slice(0,250);
        try {
            //const body = this.state.description;
            //need to use async await so that the fetch can go through
            const response = await fetch("http://localhost:5000/newpost", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description: concatenated})
            });
            //this will refresh and show the changes once the response has consent
            window.location = "/";
            this.setState({description: ""});
        } catch(err) {
            console.log(err);
        }
    }

    render(){
        let post;
        if(this.state.newPost === true){
            post = (<div className="card w-75 mt-3">
                        <div className="card-body">
                          <h6>Test</h6>
                            <div>
                                <textarea className="form-control h-75" placeholder="post.." value={this.state.description} onChange={e => this.updateDescription(e.target.value)}/>
                            </div>
                            <div className="pt-2">
                                <button className="btn btn-primary m-1" type="button" onClick={(e) => this.createNewPost(e)}>Post</button>
                                <button className="btn btn-primary m-1" type="button" onClick={(e) => this.hideNewPost()}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )
        }

        return (
            <div className="pt-3">
                <button type="button" className="btn btn-primary" onClick={(e) => this.showNewPost()}>
                    Create Post
                </button>
                {post}
            </div>
        )
    }
}

export default CreatePost;