import React, { Component } from "react";
import axios from "axios";
// import Homepage from './components/pages/homepage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// Components and Pages
import userCheck from "./components/utils/utilities";
import * as Pages from "./components/pages";
import * as Elements from "./components/elements";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    };
    this._login = this._login.bind(this);
    this._logout = this._logout.bind(this);
    this.verifyUserSession = this.verifyUserSession.bind(this);
  }
  componentDidMount() {
    this.verifyUserSession();
  }

  async verifyUserSession() {
    const userObj = await userCheck();

    this.setState({
      loggedIn: userObj.loggedIn,
      user: userObj.user
    });
    // console.log(this.state);
  }

  _login(username, password) {
    axios
      .post("/auth/login", {
        username,
        password
      })
      .then(response => {
        // console.log("this is the response!!", response);
        if (response.status === 200) {
          // update the state
          this.verifyUserSession();
        }
      });
    // console.log(this.state);
  }

  _logout(event) {
    event.preventDefault();
    // console.log("logging out");
    axios.post("/auth/logout").then(response => {
      // console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: {
            name: '',
            bio: '',
            talent: '',
            email: '',
            phone: '',
            zipcode: ''
          }
        });
      }
    });
  }

  render() {

    return (
      <Router>
        <div className="ui container">
          <Elements.Navbar
            isLoggedIn={this.state.loggedIn}
            _logout={this._logout}
          />
          <Switch>
            <Route exact path="/" component={Pages.Homepage} />
            <Route
              exact
              path="/profile"
              render={() => <Pages.Profile userData={this.state} />}
            />
            <Route exact path="/register" render={() => <Pages.Register />} />
            <Route
              exact
              path="/login"
              render={() => <Pages.Login _login={this._login} />}
            />

            <Route component={Pages.NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{
  /* <Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'} /> */
}
