import React from 'react'
import { Card, Image, Divider, Segment, Grid, Header} from 'semantic-ui-react'

const Profile = () => (
    <Card>
        <Image src='../images/placeholder.png' />
        <Card.Content>
        <Card.Header>Profile1</Card.Header>
        <Divider />
        <Card.Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</Card.Description>
        
        {/* <Header as='h2' style={style.h2} textAlign='center'/> */}

        <Segment.Group horizontal raised>
        <Segment>Web Developer</Segment>
        </Segment.Group>
        </Card.Content>
        <Divider />

        <Header size='large'>Show Us Your Talent</Header>

        <Grid container columns={3}>
            <Grid.Column>
                <Image src='../images/placeholder.png' />
            </Grid.Column>
            <Grid.Column>
                <Image src='../images/placeholder.png' />
            </Grid.Column>
             <Grid.Column>
                <Image src='../images/placeholder.png' />
            </Grid.Column>
        </Grid>
    </Card>
)

export default Profile