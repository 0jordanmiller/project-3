import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            <div className='login-form'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Login to your account
                        </Header>
                        <Form size='huge'>
                            <Segment stacked>
                                <Form.Input name='username' value={this.state.username} onChange={this.handleChange} fluid icon='user' iconPosition='left' placeholder='Username' />
                                <Form.Input name='password' value={this.state.password} onChange={this.handleChange}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                                <Button onClick={this.handleSubmit} content='Login' color='teal' fluid size='large' />
                            </Segment>
                        </Form>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default Login;