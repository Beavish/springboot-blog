import React, { Component } from "react";
import {
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
} from "reactstrap";
import Image from "react-bootstrap/Image";

class Edit extends Component {
  emptyItem = {
    title: "",
    content: "",
    updated_at: new Date(),
    id: this.props.match.params.id,
    date_created: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      Posts: [],
      id: this.props.match.params.id,
      updated_at: new Date(),
      item: this.emptyItem,
      selectedFile: null,
    };

    console.log("props", props);
    console.log("props.location", props.location);

    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const id = this.state.id;
    console.log(id);
    const response = await fetch("/posts/post/" + id);
    const body = await response.json();
    this.setState({ Posts: body, isLoading: false });
    this.setState((this.emptyItem.date_created = body.date_created));
  }
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    this.setState({
      selectedFile: file,
    });
    console.log(this.state.selectedFile);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
    console.log(this.state.item);
  }

  deletImage(id) {}

  handleSubmit(event) {
    event.preventDefault();
    const item = this.state.item;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    fetch("/posts/post/" + this.state.id, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const img = new FormData();
        img.append("file", this.state.selectedFile);
        img.append("post_id", this.state.id);

        const imgRequestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: img,
        };
        fetch(
          "http://localhost:8080/api/images/" +
            this.state.Posts.postImage[0].id,
          imgRequestOptions
        )
          .then((response) => {
            this.setState({ error: "", msg: "Sucessfully uploaded file" });
          })
          .catch((err) => {
            this.setState({ error: err });
          });
      });
  }

  render() {
    const { Posts, isLoading } = this.state;
    if (isLoading) return <div>Loading...</div>;
    return (
      <Container fluid>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label for="Title" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    id="title"
                    placeholder="with a placeholder"
                    defaultValue={Posts.title}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="content" sm={2}>
                  Content
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="content"
                    onChange={this.handleChange}
                    id="content"
                    defaultValue={Posts.content}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="photo" sm={2}>
                  Photo:
                </Label>
                <Col sm={10}>
                  <input
                    type="file"
                    name="file"
                    onChange={this.onChangeHandler}
                    required
                  />
                  We need to show the old photo and give an option to update the
                  new photo
                  <FormText color="muted"></FormText>
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col sm>
            <Row>
              <Image
                src={"data:image/jpg;base64," + Posts.postImage[0].imageByte}
                thumbnail
                width="200"
                height="200"
              />
            </Row>
            <Row>
              <Button onClick={() => this.deletImage()} color="danger">
                Delete
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Edit;
