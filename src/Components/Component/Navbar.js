import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import "./../../Css/Navbar.css";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class HamburgerMenu extends React.Component {

  render() {
    return (
        <div>
          <div className="HamburgerMenu">
            <Navbar dark>
              <NavbarBrand className="mr-auto HamburgerMenu vrk font-weight-bold ml-md-5"> VRK</NavbarBrand>
                <Nav navbar className="d-flex flex-row" >
                  <NavItem>
                  <NavLink to="/" exact={true} className="btn flag-et m-1"></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink to="/en" className="btn flag-en m-1"></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink to="/de" className="btn flag-ge m-1"></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink to="/fi" className="btn flag-fin m-1"></NavLink>
                  </NavItem>
                  <NavItem>
                <NavLink to="/lv" className="btn flag-lat m-1"></NavLink>
                  </NavItem>
                </Nav>
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