import React, { Component } from 'react';

class Blog extends Component {
    state = {  isLoading : true,
        Posts : [] ,
        Images :[],
    }
        async componentDidMount(){
            const response=await fetch('/posts/all');
            const body = await response.json();
            const response2 = await fetch('/api/images/all');
            const img = await response2.json();
            this.setState({Posts : body ,Images : img, isLoading: false});
        }
    render() { 
       

        const {Posts ,Images, isLoading} = this.state;
        if(isLoading) 
            return (<div>Loading...</div>);
        return (    <div>
           
            <h2>Posts</h2>
            {
                Posts.map( post => 
                    <div id={post.id}><br/>
                        {post.title}<br/>{post.content}<br/>
                    </div>
                    
                )
                }
                            <h2>Images</h2>
                            {
                                Images.map(image =>
                                    <div id={image.id}><br/>
                                    {image.name}<br/>
                                    
                                <img src={"data:image/jpg;base64," +  image.imageByte }alt="something"/> 
                                    
                                     
                                     <br/>{image.post.post_id}

                                    </div>


                                )
                            }
             

        </div> );
    }
}
 
export default Blog;