import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./../Css/Navbar.css";

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="HamburgerMenu">
        <Navbar color="faded" dark>
          <NavbarBrand href="/" className="mr-auto">VRK</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://www.facebook.com/Valga-Rockiklubi-141376155934174/" target="_blank" rel="noreferrer">FaceBook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/77ccreed/rockiklubi-react" target="_blank" rel="noreferrer">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}