import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";


class MyNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fluid className="nav-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
                <div className="nav-brand" style={{backgroundImage: 'url("images/southernflare.png")'}}></div>
              </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav >
            <NavItem>
              <Link to="/">
                <span className="nav-links">Home</span>
              </Link>
            </NavItem>

        {/*Services DROPDOWN*/}
            <NavDropdown className="FAQ" eventKey={4} title="Services" id="basic-nav-dropdown">
                <Link to="/lashes">
                  <MenuItem className="drop-item" eventKey={3.1}>Lashes</MenuItem>
                </Link>

                <Link to="/perm_makeup">
                  <MenuItem eventKey={3.2}>Permanent Makeup</MenuItem>
                </Link>

                <Link to="/waxing">
                  <MenuItem eventKey={3.3}>Waxing</MenuItem>
                </Link>

                <Link to="/facials">
                  <MenuItem eventKey={3.4}>Facials</MenuItem>
                </Link>
              </NavDropdown>

          {/*STAFF*/}
            <NavItem>
              <Link to="/staff">
                <span className="nav-links">Staff</span>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/product">
                <span className="nav-links">Product</span>
              </Link>
            </NavItem>

        {/*FAQ DROPDOWN*/}
              <NavDropdown className="FAQ" eventKey={2} title="FAQ's" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to="/lash_FAQ">Lashes</Link>
                </MenuItem>

                <MenuItem eventKey={3.2}>
                  <Link to="/perm_FAQ">Permanent Makeup</Link>
                </MenuItem>
              </NavDropdown>

            <NavItem>
              <Link to="/contact">
                <span className="nav-links">Contact</span>
              </Link>
            </NavItem>

            <NavItem className="">
              <Link  to="/schedule">
                <span className="btn nav-schedule">Schedule Now</span>
              </Link>
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
        );
    }
}

export default MyNavbar;
