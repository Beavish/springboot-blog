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
   // this.onFileChange = this.onFileChange.bind(this);
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
        
        const postID =JSON.stringify(data.post_id);
       
        console.log(postID);
    
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
