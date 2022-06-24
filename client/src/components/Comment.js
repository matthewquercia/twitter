import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <p><b>username</b></p>
            <p>{comment.commentdescription}</p>
        </div>
    )
}

export default Comment;