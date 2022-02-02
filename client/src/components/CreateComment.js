import React, {Fragment} from 'react';

class CreateComment extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            inputFieldSelected: false
        }
    }

    showCommentCancelButtons = () => {
        this.setState({inputFieldSelected: true});
    }
    
    hideCommentCancelButtons = () => {
        this.setState({inputFieldSelected: false});
    }

    render(){
        let commentButtons;
        if(this.state.inputFieldSelected){
            commentButtons = (
                <Fragment>
                    <button className="btn btn-outline-secondary" type="button">Comment</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={(e) => this.hideCommentCancelButtons()}>Cancel</button>
                </Fragment>
            )
        }

        return(
            <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control" placeholder="Add a comment..." onFocus={(e) => this.showCommentCancelButtons()}/>
                {commentButtons}
            </div>
        )
    }
}

export default CreateComment;