import React, { Component } from "react";

class NewPost extends Component {
   
  
  emptyItem = {
    title: "",
    content: "",
    date_created: new Date(),
  };
   emptyFile={
       name :"",
       file :"",
       post_id:"",
   };

  

  constructor(props) {
    super(props);
    this.state = { date_created: new Date(), item: this.emptyItem,file: this.emptyFile };

    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
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

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    });
  }

  handleSubmit(event) {
    const item = this.state.item;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
        };
    fetch('/posts/post/new', requestOptions)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        

        let imgdata = new FormData();
        const postID = data.post_id;
        
        imgdata.append('file', this.state.file);
        imgdata.append('name', this.state.file.name);
        imgdata.append('post_id', postID);// this doesn't appened the post id as post is not in the state
        // need to figure out how to modify the state to also contain the post_id
       
        console.log(postID);
        fetch('http://localhost:8080/api/images', {
          method: 'POST',
          body: imgdata
        }).then(response => {
          this.setState({error: '', msg: 'Sucessfully uploaded file'});
        }).catch(err => {
          this.setState({error: err});
        });
      });
        


    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="title" onChange={this.handleChange} />
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
          
        <h4 style={{color: 'red'}}>{this.state.error}</h4>
        <h4 style={{color: 'green'}}>{this.state.msg}</h4>
        <input onChange={this.onFileChange} type="file"></input>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPost;
