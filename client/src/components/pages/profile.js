import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import userCheck from "../utils/utilities";

class Profile extends Component {
  constructor() {
    super();
    this.verifyUserSession = this.verifyUserSession.bind(this);
    this.state = {
      loggedIn: null,
      user: {
        name: '',
        bio: '',
        talent: '',
        email: '',
        phone: '',
        zipcode: ''
      }
    };
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
    console.log(this.state.user.name);
  }

  render() {

    return (
      <div>
        <br />
        <Header content={this.state.user.name} as="h1" />
        <Header content={this.state.user.talent} as="h1" />
        <Header content={this.state.user.email} as="h1" />
        <Header content={this.state.user.phone} as="h1" />
        <Header content={this.state.user.zipcode} as="h1" />

      </div>
    );
  }
}

export default Profile;

// <Card>
//     <Image src='../images/placeholder.png' />
//     <Card.Content>
//     <Card.Header>Profile1</Card.Header>
//     <Divider />
//     <Card.Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</Card.Description>
//     {/* <Header as='h2' style={style.h2} textAlign='center'/> */}

//     <Segment.Group horizontal raised>
//     <Segment>Web Developer</Segment>
//     </Segment.Group>
//     </Card.Content>
//     <Divider />

//     <Header size='large'>Show Us Your Talent</Header>

//     <Grid container columns={3}>
//         <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//         <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//          <Grid.Column>
//             <Image src='../images/placeholder.png' />
//         </Grid.Column>
//     </Grid>
// </Card>
