import React, {Fragment} from 'react';

import CreateComment from './CreateComment';
import ListComments from './ListComments';

const Post = ({post}) => {
    return(
        <div className="card w-75 mt-3">
          <div className="card-body">
            <h6>User</h6>
            <p className="card-text">{post.postdescription}</p>
            <CreateComment post_id={post.post_id}/>
            <ListComments post_id={post.post_id}/>
          </div>
        </div>
    )
}

export default Post;