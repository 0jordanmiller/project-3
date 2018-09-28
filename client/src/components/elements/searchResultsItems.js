import React from "react";
import { Header, Item } from "semantic-ui-react";

const SearchItem = () => (
  <div>
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header as="a">Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description />
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>
);

export default SearchItem;
