import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Home"
    };
  }

  componentDidMount() {
    // console.log(this.props.isLogg);
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    });
  };

  handleLogout = event => {
    this.props._logout(event);
  };

  render() {
    // This tells the navbar to render either a login button or a message saying you're logged in
    // console.log(this.props.isLoggedIn);
    const { activeItem } = this.state;
    let loggedInNavbar;
    let loginButton;
    let logoutButton;
    if (this.props.isLoggedIn) {
      loggedInNavbar = "You're logged in!";
      logoutButton = (
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={this.handleLogout}
        />
      );
    } else {
      loggedInNavbar = "Not logged in";
      loginButton = (
        <NavLink to="/login">
          <Menu.Item
            name="login"
            NavLink={true}
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </NavLink>
      );
    }

    return (
      <div>
        <Menu size={"large"} secondary>
          <NavLink to="/">
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="/register">
            <Menu.Item
              name="Register"
              active={activeItem === "Register"}
              onClick={this.handleItemClick}
            />
          </NavLink>
          <NavLink to="/profile">
            <Menu.Item
              name="Profile"
              active={activeItem === "Profile"}
              onClick={this.handleItemClick}
            />
          </NavLink>
          <Menu.Menu position="right">
            <Menu.Item content={loggedInNavbar} />
            {loginButton}
            {logoutButton}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
