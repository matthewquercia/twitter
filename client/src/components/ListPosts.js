import React, {Fragment} from 'react';

import Post from './Post';

class ListPosts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount = () => {
        this.getTodos();
    }
    
    getTodos = async () => {
        try {
            //by default fetch makes a GET request
            const response = await fetch("http://localhost:5000/posts");
            const jsonData = await response.json();

            this.setState({posts: jsonData});
        } catch(err) {
            console.log(err);
        }
    }
    
    render(){
        return (
            <div className="pt-3">
                {this.state.posts.map((p) => {
                    return <Post key={p.post_id} post={p} />
                })}
            </div>
        )
    }
}

export default ListPosts;