import React, { Component } from "react";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    //file["post_id"] = "1";
    console.log(file);

    this.setState({
      selectedFile: file,
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("post_id", "1");
    console.log(data);

    fetch("http://localhost:8080/api/images", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        this.setState({ error: "", msg: "Sucessfully uploaded file" });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };
  render() {
    return (
      <div>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button
          type="button"
          class="btn btn-success btn-block"
          onClick={this.onClickHandler}
        >
          Upload
        </button>
      </div>
    );
  }
}

export default Admin;
