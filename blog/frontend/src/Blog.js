import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class Blog extends Component {
  state = { isLoading: true, Posts: [] };

  deletePost(id) {
    fetch(`/posts/post/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedPosts = [...this.state.Posts].filter((i) => i.id !== id);
      this.setState({ Posts: updatedPosts });
    });
  }
  updatePost(id) {
    console.log("Hi");
  }

  goToShow(id) {
    console.log("hi" + id);
  }

  // load all the posts
  async componentDidMount() {
    const response = await fetch("/posts/all");
    const body = await response.json();
    this.setState({ Posts: body, isLoading: false });
  }
  render() {
    const { Posts, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subject</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {Posts.map((post) => (
            <tbody>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date_created}</td>

              <td>
                <span>
                  <Link to={`/show/${post.id}`}>
                    <Button outline color="info">
                      Read
                    </Button>
                  </Link>
                </span>
              </td>

              <td>
                <span>
                <Link to={`/show/${post.id}`}>
                    <Button color="info">
                      Edit
                    </Button>
                  </Link>
                </span>
              </td>

              <td>
                <span>
                  {" "}
                  <Button
                    onClick={() => this.deletePost(post.id)}
                    outline
                    color="danger"
                  >
                    Delete
                  </Button>
                </span>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Blog;
