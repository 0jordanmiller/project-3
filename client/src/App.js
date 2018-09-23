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
            <Route exact path="/profile" component={Pages.Profile} />
            <Route exact path="/searchresults" component={Pages.Searchpage} />
            

            {/* <Route exact path='/google' component={Redirect} loc='www.google.com' /> */}
            <Route component={Pages.NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{/* <Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'} /> */ }
