import React from 'react';
import { Grid } from 'semantic-ui-react';

const Login = (props) => (
    <div>
        <br />
        <Grid centered>
            <Grid.Row>
                <a href='/auth/google'>login</a>
            </Grid.Row>
        </Grid>
    </div>
)

export default Login;