import React, { Component } from 'react';
import axios from 'axios';
// import Homepage from './components/pages/homepage';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components and Pages
import * as Pages from './components/pages';
import * as Elements from './components/elements';

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._login = this._login.bind(this) //what is happening here?
  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _login(username, password) {
    console.log('testing');
    axios.post('/auth/login', {
      username,
      password
    })
      .then(response => {
        console.log('this is the response!!', response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true
            // user: response.data.user
          })
        }
        console.log(this.state);

      })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }


  render() {
    return (
      <Router>
        <div className='ui container'>
          <Elements.Navbar />
          <Switch>
            <Route exact path="/" component={Pages.Homepage} />

            <Route exact path="/profile" component={Pages.Profile} />

            <Route exact path="/searchresults" component={Pages.Searchpage} />
            <Route exact path="/loginregister" render={() => <Pages.Login _login={this._login} />} />


            {/* <Route exact path='/loginregister' component={Pages.Login} /> */}
            <Route component={Pages.NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{/* <Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'} /> */ }
