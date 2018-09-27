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
        let loggedInNavbar;
        if (this.props.isLoggedIn) {
            loggedInNavbar = "You're logged in!";
        } else {
            loggedInNavbar = "Not logged in";
        }

        const { activeItem } = this.state;
        return (
            <div>
                <Menu size={'large'} secondary>
                    <Link to='/'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} /></Link>
                    <Link to='/register'><Menu.Item name='Register' active={activeItem === 'Register'} onClick={this.handleItemClick} /></Link>
                    <Link to='/profile'><Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} /></Link>
                    <Menu.Menu position='right'>
                        <Menu.Item content={loggedInNavbar}></Menu.Item>
                        <Link to='/login'><Menu.Item name='login' link={true} active={activeItem === 'login'} onClick={this.handleItemClick}></Menu.Item></Link>
                    </Menu.Menu>
                </Menu>

            </div>
        )
    }
}

export default Navbar;