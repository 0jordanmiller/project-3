import React, { Component } from 'react';
import userCheck from "../utils/utilities";
import Categorycard from '../elements/categoryCard';
import Searchpage from "../elements/searchResults";
import { Grid, Search, Header, Card } from 'semantic-ui-react';

const categoryNames = ['Tutoring', 'Home Improvement', 'Music']
// const categoryDescriptions = ['description', 'description', 'description'];


class Homepage extends Component {
    constructor() {
        super();
        this.verifyUserSession = this.verifyUserSession.bind(this);
        this.state = {
            loggedIn: null
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

                <Grid centered>
                    <Grid.Row>
                        {categoryNames.map((item) => (
                            <Grid.Column width={4}>
                                <Categorycard centered headers={item} />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                    <Grid.Row>
                        <Search />
                    </Grid.Row>
                    <Grid.Row>
                        {/* <Searchpage /> */}
                    </Grid.Row>
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