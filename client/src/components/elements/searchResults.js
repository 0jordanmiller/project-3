import React from 'react'
import { Header, Icon, Divider, Dropdown, Form, TextArea } from 'semantic-ui-react'


const talentOptions = [
    { key: 'web development', text: 'Web Development', value: 'web development' },
    { key: 'tutoring', text: 'Tutoring', value: 'tutoring' },
    { key: 'home improvement', text: 'Home Improvement', value: 'home improvement' },
]

const Searchpage = () => (
    <div>
        <Icon name='balance' size='large' />
        <Header as='h1'>Tell us what you are looking for:</Header>
        <Divider />
        <Dropdown placeholder='Select Talent' fluid selection options={talentOptions} />
        <br></br>
        <Form>
            <TextArea autoHeight placeholder='Tell us a little bit about the project:' />
        </Form>
    </div>
)


export default Searchpage