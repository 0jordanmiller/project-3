import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'Home'
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        });

    }

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu pointing secondary>
                    <Link to='/'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} /></Link>
                    <Link to='/portfolio'><Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} /></Link>
                    <Link to='/contact'><Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} /></Link>
                </Menu>
            </div>
        )
    }
}

export default Navbar;