import React, { Component } from "react";
import Image from 'react-bootstrap/Image'

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      Posts: [],
    };

    console.log("props", props);
    console.log("props.location", props.location);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    const response = await fetch("/posts/post/"+id);
    const body = await response.json();
    this.setState({ Posts: body, isLoading: false });
  }

  render() {
    const { Posts, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            

               { Posts.id}
               {Posts.title}
               {Posts.content}
               <Image src={"data:image/jpg;base64," +  Posts.postImage[0].imageByte} fluid />
            
            
           
            </div>

  
    )
     
    
  
         
}
}

export default Show;
