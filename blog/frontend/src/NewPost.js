import React, { Component } from "react";

class NewPost extends Component {
  emptyItem = {
    title: "",
    content: "",
    date_created: new Date(),
  };

  constructor(props) {
    super(props);
    this.state = {
      date_created: new Date(),
      item: this.emptyItem,
      selectedFile: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    this.setState({
      selectedFile: file,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const item = this.state.item;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    fetch("/posts/post/new", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id);
        const img = new FormData();
        img.append("file", this.state.selectedFile);
        img.append("post_id", data.id);

        fetch("http://localhost:8080/api/images", {
          method: "POST",
          body: img,
        })
          .then((response) => {
            this.setState({ error: "", msg: "Sucessfully uploaded file" });
          })
          .catch((err) => {
            this.setState({ error: err });
          });
      });
    
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="title" onChange={this.handleChange} required/>
            <br />
          </label>
          <br />
          <label>
            Content:
            <textarea
              type="text"
              name="content"
              onChange={this.handleChange}
            ></textarea>
          </label>

          <h4 style={{ color: "red" }}>{this.state.error}</h4>
          <h4 style={{ color: "green" }}>{this.state.msg}</h4>
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;
