import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Input, TextArea, Message } from "semantic-ui-react";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            redirect: null,
            passwordMatch: null
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
        if (this.state.password !== this.state.repeat) {
            this.setState({
                passwordMatch: false
            })
        }
        console.log("a");
        event.preventDefault();
        console.log(this.state);
        // TODO - validate!
        axios
            .post("/auth/register", {
                username: this.state.username,
                password: this.state.password,
                zipcode: this.state.zipcode,
                bio: this.state.bio,
                talent: this.state.talent,
                phone: this.state.phone,
                name: this.state.name,
                email: this.state.email
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
        let passwordMatch
        if (this.state.passwordMatch === false) {
            passwordMatch = <Message header="Password doesn't match" />
        }

        return (
            <div>
                <br />
                {passwordMatch}
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
                            type='password'
                        />
                        <Form.Field
                            onChange={this.handleChange}
                            name="repeat"
                            control={Input}
                            label="Confirm Password"
                            type='password'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            onChange={this.handleChange}
                            name="phone"
                            control={Input}
                            label="Phone Number"
                        />
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
                        <Form.Field
                            onChange={this.handleChange}
                            name="talent"
                            control={TextArea}
                            label="Talents"
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
