import React, { Component } from "react";
import { Button } from "reactstrap";

class Blog extends Component {
  state = { isLoading: true, Posts: [] };

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


  editPost() {
    console.log("Hi");
  }
  // load all the posts
  async componentDidMount() {
    const response = await fetch("/posts/all");
    const body = await response.json();
    this.setState({ Posts: body, isLoading: false });
  }
  render() {
    const { Posts, isLoading } = this.state;
    console.log(Posts);
    if (isLoading) return <div>Loading...</div>;
    return (
      <div>
        <h2>Posts</h2>

        {Posts.map((post) => (
          <div id={post.id}>
            <br />
            <h2>{post.title}</h2>

            <div>
              <br />
              {post.content}
              <br />
              {
                // need some logic to check if there are images first or it'll break
              }
              {console.log(post.postImage[0].imageByte)}
              <img
                src={"data:image/jpg;base64," + post.postImage[0].imageByte}
                alt="something"
                width="500"
                height="600"
              />
            </div>
            <Button onClick={this.editPost} outline color="info">
              Edit
            </Button>
            <Button onClick={() => this.deletePost(post.id)} outline color="danger">
              Delete
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
