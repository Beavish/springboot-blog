import React, { Component } from 'react';

class Blog extends Component {
    state = {  isLoading : true,
        Posts : [] }
        async componentDidMount(){
            const response=await fetch('/posts/all');
            const body = await response.json();
            this.setState({Posts : body , isLoading: false});
        }
    render() { 
        const {Posts , isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        return (    <div>
           
            <h2>Posts</h2>
            {
                Posts.map( post => 
                    <div id={post.id}><br/>
                        {post.title}<br/>{post.content}<br/>!!{post.postImage}!!
                    </div>
                    
                )

            }

        </div> );
    }
}
 
export default Blog;