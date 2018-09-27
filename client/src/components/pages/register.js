import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Input, TextArea } from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: null
    };
    this.handleSubmit = this.handleSubmit.bind(this); //what is happening here?
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log("a");
    event.preventDefault();
    console.log(this.state);
    // TODO - validate!
    axios
      .post("/auth/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("youre good");
          this.setState({
            redirectTo: "/login"
          });
        } else {
          console.log("duplicate");
        }
      });
  }

  render() {
    return (
      <div>
        <br />
        <Form>
          <Form.Group>
            <Form.Field
              onChange={this.handleChange}
              name="name"
              control={Input}
              label="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              onChange={this.handleChange}
              name="username"
              control={Input}
              label="Username"
            />
            <Form.Field
              onChange={this.handleChange}
              name="password"
              control={Input}
              label="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              onChange={this.handleChange}
              name="email"
              control={Input}
              label="Email"
            />
            <Form.Field
              onChange={this.handleChange}
              name="zipcode"
              control={Input}
              label="Zip Code"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              onChange={this.handleChange}
              name="bio"
              control={TextArea}
              label="Bio"
            />
          </Form.Group>
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Register"
            onClick={this.handleSubmit}
          />
        </Form>
      </div>
    );
  }
}

export default Register;
