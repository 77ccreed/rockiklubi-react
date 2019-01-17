import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink  } from 'reactstrap';
import "./../Css/Navbar.css";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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

      <Router>
        <div>
          <div className="HamburgerMenu">
            <Navbar dark>
              <NavbarBrand className="mr-auto HamburgerMenu vrk font-weight-bold ml-md-5"> VRK</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="https://www.facebook.com/Valga-Rockiklubi-141376155934174/" target="_blank" rel="noopener noreferrer">FaceBook</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/77ccreed/rockiklubi-react" target="_blank" rel="noopener noreferrer">GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn flag-et "></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn flag-en "></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn flag-ge"></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn flag-fin"></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn flag-lat"></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          
         

                 
        </div>
      </Router>


     
    );
  }
  
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}