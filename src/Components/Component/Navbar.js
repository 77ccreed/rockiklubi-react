import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import "./../../Css/Navbar.css";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (

        <div>
          <div className="HamburgerMenu">
            <Navbar dark>
              <NavbarBrand className="mr-auto HamburgerMenu vrk font-weight-bold ml-md-5"> VRK</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar className="d-flex flex-row justify-content-center" >
                  <NavItem>
                  <NavLink to="/" exact={true} className="btn flag-et"></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/en" className="btn flag-en"></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/de" className="btn flag-ge"></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/fi" className="btn flag-fin"></NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink to="/lv" className="btn flag-lat"></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>                 
        </div>   
    );
  }  
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}