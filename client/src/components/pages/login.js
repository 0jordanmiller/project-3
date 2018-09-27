import React, { Component } from 'react';
import { Grid, Form, Card } from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: null
        }
        this.handleSubmit = this.handleSubmit.bind(this) //what is happening here?
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }

    handleSubmit(event) {  //how does this work? how does props go up to App.js?
        event.preventDefault();
        this.props._login(this.state.username, this.state.password)
        console.log('submitting!');
    }

    render() {
        return (
            <div>
                <br />
                <Grid centered>
                    <Grid.Row>
                        <Card>
                            <Form>
                                <Form.Input name='username' value={this.state.username} onChange={this.handleChange} placeholder='Username' />
                                <Form.Input name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' />
                                <Form.Button onClick={this.handleSubmit} content='Login' type='submit' />
                            </Form>
                        </Card>
                    </Grid.Row>
                    {/* <Button href='/register' content='Register' /> */}
                </Grid>
            </div>
        )
    }

}

export default Login;
