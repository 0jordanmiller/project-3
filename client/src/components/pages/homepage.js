import React from 'react';
import Categorycard from '../elements/categoryCard';
import { Grid, Search, Image } from 'semantic-ui-react';
import * as Images from '../images';


const categoryNames = ['Tutoring', 'Home Improvement', 'Web Development']
// const categoryDescriptions = ['description', 'description', 'description'];



const Homepage = (props) => (
    <div>
        <br />

        <Grid centered>
            <Grid.Row>
                    <Grid.Column width={4}>
                        <Categorycard centered content />
                        <Image  src={Images.A} rounded />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Categorycard centered content />
                        <Image  src={Images.B} rounded />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Categorycard centered content />
                        <Image  src={Images.C} rounded />
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Search defaultValue='Zip Code'></Search>
            </Grid.Row>
        </Grid>
    </div>
)

export default Homepage;