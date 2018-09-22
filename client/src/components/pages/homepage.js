import React from 'react';
import Categorycard from '../elements/categoryCard';
import { Grid, Search } from 'semantic-ui-react';

const categoryNames = ['Tutoring', 'Home Improvement', 'Music']
// const categoryDescriptions = ['description', 'description', 'description'];

const Homepage = (props) => (
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
                <Search defaultValue='h'></Search>
            </Grid.Row>
        </Grid>
    </div>
)

export default Homepage;