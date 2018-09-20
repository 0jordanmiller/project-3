import React from 'react';
import { Card } from 'semantic-ui-react';

const CategoryCard = (props) => (
    <div>
        <Card
            header={props.headers}
            description={props.description}
        />
    </div>
)


export default CategoryCard