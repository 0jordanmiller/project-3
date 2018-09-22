import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const NoMatch = (props) => (
    <div>
        <br />

        <Grid centered>
            <Grid.Row>
                <Grid.Column><Header>No match!</Header></Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default NoMatch;