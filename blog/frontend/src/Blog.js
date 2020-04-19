import React, { Component } from 'react';

class Blog extends Component {
    state = {  isLoading : true,
        Posts : [] ,
       
    }
        async componentDidMount(){
            const response=await fetch('/posts/all');
            const body = await response.json();
            this.setState({Posts : body , isLoading: false});
        }
    render() { 
       

        const {Posts , isLoading} = this.state;
        console.log(Posts);
        if(isLoading) 
            return (<div>Loading...</div>);
        return (    <div>
           
            <h2>Posts</h2>
        
            {
                Posts.map( post => 
                    <div id={post.id}><br/>
                        {post.title}<br/>{post.content}<br/>
                        {// need some logic to check if there are images first or it'll break
                        }
                        {console.log(post.postImage[0].imageByte)}
                        <img src={"data:image/jpg;base64," +  post.postImage[0].imageByte}alt="something"/> 
                    </div>
                    
                )
                }
                            
             

        </div> );
    }
}
 
export default Blog;