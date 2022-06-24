import React from 'react';

import Comment from './Comment';

class ListComments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount = () => {
        this.getComments();
    }

    getComments = async () => {
        try {
            //need to use async await so that the fetch can go through
            const response = await fetch(`http://localhost:5000/comments/${this.props.post_id}`)
            const jsonData = await response.json();

            this.setState({comments: jsonData});
        } catch(err) {
            console.log(err);
        }
    }

    render(){
        return(
            <div className="mt-3">
                {this.state.comments.map((c) => {
                    return <Comment key={c.comment_id} comment={c} />
                })}
            </div>
        )
    }
}

export default ListComments;