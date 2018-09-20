import React from 'react';
import Categorycard from '../elements/categoryCard';
import { Grid } from 'semantic-ui-react';

const categoryNames = ['Tutoring', 'Home Improvement', 'Music']
const categoryDescriptions = ['description', 'description', 'description'];

const Homepage = (props) => (
    <div>
        <br />
        <Grid>
            <Grid.Row>
                {categoryNames.map((item) => (
                    <Grid.Column width={5}>
                        <Categorycard centered headers={item} />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>


    </div>
)

export default Homepage;