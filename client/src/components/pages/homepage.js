import React, { Component } from "react";
import axios from "axios";
import * as Elements from "../elements";
import userCheck from "../utils/utilities";
import Categorycard from "../elements/categoryCard";
import Searchpage from "../elements/searchResults";
import { Grid, Item, Form } from "semantic-ui-react";
import API from "../utils/API";

const categoryNames = ["Tutoring", "Home Improvement", "Music"];
// const categoryDescriptions = ['description', 'description', 'description'];

//User verify==========
class Homepage extends Component {
  constructor() {
    super();
    this.verifyUserSession = this.verifyUserSession.bind(this);
    // this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchMaps = this.searchMaps.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      loggedIn: null
    };
  }
  async verifyUserSession() {
    const userObj = await userCheck();
    this.setState({
      loggedIn: userObj.loggedIn,
      user: userObj.user
    });
  }

  //API================
  componentDidMount() {
    this.verifyUserSession();
    this.searchMaps("postal_code");
  }

  handleSearch() {}

  async verifyUserSession() {
    const userObj = await userCheck();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  searchMaps = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  // selectCategory() {
  //   this.setState({
  // When you click on a category, this activates and sets the search parameters
  //   })
  // }

  //Second part of the Call============
  // onSearch() {
  //   console.log(this.state.zipcode);
  //   axios.post('/search', {
  //     zipcode: this.state.zipcode
  //   })/* .then(response => {
  //     console.log('This is line 55', response);
  //   }); */
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMaps(this.state.search);
  };

  render() {
    return (
      <div>
        <br />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={4}>
              <Categorycard centered headers={"hi"} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Form>
              <Elements.SearchForm
                search={this.state.zipcode}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleChange}
              />

              {/* <Form.Input onChange={this.handleChange} value={this.state.value} label='Zipcode' name='zipcode' placeholder='zipcode' />
              <Form.Button onClick={this.onSearch}>Submit</Form.Button> */}
            </Form>
          </Grid.Row>

          {/* <Grid.Row><Searchpage /></Grid.Row> */}
        </Grid>
      </div>
    );
  }
}

// const Homepage = (props) => (
//     <div>
//         <br />

//         <Grid centered>
//             <Grid.Row>
//                 {categoryNames.map((item) => (
//                     <Grid.Column width={4}>
//                         <Categorycard centered headers={item} />
//                     </Grid.Column>
//                 ))}
//             </Grid.Row>
//             <Grid.Row>
//                 <Search />
//             </Grid.Row>
//             <Grid.Row>
//                 {/* <Searchpage /> */}
//             </Grid.Row>
//         </Grid>
//     </div>
// )

export default Homepage;

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
