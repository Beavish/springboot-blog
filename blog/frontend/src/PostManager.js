import React, { Component } from "react";
import NewPost from "./NewPost";
import { Button } from "reactstrap";


class PostManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, 
      Posts: []
    };

    console.log('props', props);
    console.log('props.location', props.location);
}

  async componentDidMount() {
    this.props.match.params.id
    console.log(this.props.match.params.id);
    const response = await fetch("/posts/all");
    const body = await response.json();
    this.setState({ Posts: body, isLoading: false });
  }
  deletePost(id) {
    fetch(`/posts/post/${id}` , {
        method: 'DELETE' ,
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        }

      }).then(() => {
        let updatedPosts = [...this.state.Posts].filter(i => i.id !== id);
        this.setState({Posts : updatedPosts});
      });
  }


  editPost(id) {
    
    
  }
  
  render() {
    return (
     "POST MANAGER"
    );
  }
}

export default PostManager;
