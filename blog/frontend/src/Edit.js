import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Edit extends Component {
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
      <Form>
      <FormGroup row>
        <Label for="Title" sm={2}>Title</Label>
        <Col sm={10}>
          <Input type="text" name="title" id="title" placeholder="with a placeholder" value={Posts.title}/>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="content" sm={2}>Content</Label>
        <Col sm={10}>
          <Input type="textarea" name="content" id="content" value={Posts.content} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="photo" sm={2}>Photo:</Label>
        <Col sm={10}>
          <Input type="file" name="photo" id="photo" value={Posts.postImage.name} />
          We need to show the old photo and give an option to update the new photo
          <FormText color="muted">
            
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
     
    
  
         
}
}

export default Edit;
