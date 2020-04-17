import React, { Component } from "react";

class NewPost extends Component {
    emptyItem = {
        title : "" ,
        content:"",
        date_created : new Date(),
    }

    constructor(props) {
        super(props);
        this.state = {date_created :new Date(),item : this.emptyItem};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let item={...this.state.item};
        item[name] = value;
        this.setState({item});
        console.log(item);
        
      }

      handleSubmit(event) {
        const item = this.state.item;
        alert('A Title was submitted: ' + item.title);
        alert("Some Content was submitted: " +item.content )
         fetch(`/posts/post/new`, {
            method : 'POST',
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(item),
          });
          
          event.preventDefault();
          
      }

  render() {
    return (
    
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="title" onChange={this.handleChange} />
          <textarea type="text" name="content" onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      
    );
  }
}

export default NewPost;
