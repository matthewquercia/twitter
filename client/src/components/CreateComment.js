import React, {Fragment, useState} from 'react';

class CreateComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputFieldSelected: false,
            description: ""
        }
    }

    showCommentCancelButtons = () => {
        this.setState({inputFieldSelected: true});
    }
    
    hideCommentCancelButtons = () => {
        this.setState({inputFieldSelected: false, description: ""});
    }

    updateDescription = (val) => {
        this.setState({description: val})
    }

    createNewComment = async (e) => {
        e.preventDefault(); //?
        try {
            //to ensure the size of the comment is less than the column size
            const concatenated = this.state.description.slice(0,250);
            //need to use async await so that the fetch can go through
            const response = await fetch("http://localhost:5000/createcomment", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description: concatenated, post_id: this.props.post_id})
            });
            //this will refresh and show the changes once the response has consent
            window.location = "/";
            this.setState({description: ""});
        } catch(err) {
            console.log(err);
        }
    }

    render(){
        let commentButtons;
        if(this.state.inputFieldSelected){
            commentButtons = (
                <Fragment>
                    <button className="btn btn-outline-secondary" type="button" onClick={(e) => this.createNewComment(e)}>Comment</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={(e) => this.hideCommentCancelButtons()}>Cancel</button>
                </Fragment>
            )
        }

        return(
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="Add a comment..." value={this.state.description} onFocus={(e) => this.showCommentCancelButtons()} onChange={e => this.updateDescription(e.target.value)}/>
                {commentButtons}
            </div>
        )
    }
}

export default CreateComment;