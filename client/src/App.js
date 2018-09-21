import React, { Component } from 'react';
// import Homepage from './components/pages/homepage';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Components and Pages
import * as Pages from './components/pages';
import * as Elements from './components/elements';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='ui container'>
          <Elements.Navbar />
          <Switch>
            <Route exact path="/" component={Pages.Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
