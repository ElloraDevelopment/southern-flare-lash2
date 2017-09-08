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

              <NavDropdown className="FAQ" eventKey={11} title="FAQ's" id="basic-nav-dropdown">
                <Link to="/FAQ">
                  <MenuItem className="drop-item" eventKey={3.1}>What is Microblading?</MenuItem>
                </Link>

                <Link to="/FAQ">
                  <MenuItem eventKey={3.2}>How long is the heal time?</MenuItem>
                </Link>
                
                <Link to="/FAQ">   
                  <MenuItem eventKey={3.3}>Is it tattooing?</MenuItem>
                </Link>

                <Link to="/FAQ">
                  <MenuItem eventKey={3.4}>How long will it last?</MenuItem>
                </Link>

                <Link to="/FAQ">
                  <MenuItem eventKey={3.5}>Why will I need a touch up?</MenuItem>
                </Link>
                
                <Link to="/FAQ">
                  <MenuItem eventKey={3.6}>Does it hurt?</MenuItem>
                </Link>

                <Link to="/FAQ">
                  <MenuItem eventKey={3.7}>Pre and Post care procedures?</MenuItem>
                </Link>
                
                <Link to="/FAQ">
                  <MenuItem eventKey={3.8}>Who is not suitable for Microblading?</MenuItem>
                </Link>

                <Link to="/FAQ">
                  <MenuItem eventKey={3.9}>Over an existing brow tatoo?</MenuItem>
                </Link>
                
                <Link to="/FAQ">
                  <MenuItem eventKey={3.10}>How long will it last?</MenuItem>
                </Link>
                
                <Link to="/FAQ">
                  <MenuItem eventKey={3.11}>Cancelation policy?</MenuItem>
                </Link>
                
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