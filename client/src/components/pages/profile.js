import React from 'react'
import { Card, Image, Divider, Segment, Grid, Header} from 'semantic-ui-react'

const Profile = () => (
    <Card>
        <Image src='/images/avatar/large/placeholder.png' />
        <Card.Content>
        <Card.Header>Profile1</Card.Header>
        <Divider />
        <Card.Description>Profile1 is a ______ and enjoys tutoring during his spare time</Card.Description>
        
        {/* <Header as='h2' style={style.h2} textAlign='center'/> */}

        <Segment.Group horizontal raised>
        <Segment>Web Developer</Segment>
        </Segment.Group>
        </Card.Content>
        <Divider />

        <Header size='large'>Show Us Your Talent</Header>

        <Grid container columns={3}>
            <Grid.Column>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
             <Grid.Column>
                <Image src='/images/wireframe/image.png' />
            </Grid.Column>
        </Grid>
    </Card>
)

export default Profile