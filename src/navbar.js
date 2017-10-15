import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";


class MyNavbar extends Component {
    render() {
        return (
          <div id="hide-nav">
            <Navbar collapseOnSelect fluid className="nav-custom">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">picture</a>
                {/*<img className="navbar-brand img-responsive" alt="" src={"images/sfl-pics/logo/southernflare.png"}></img>*/}
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
              <MenuItem className="drop-item" eventKey={3.1}>
                <Link to="/lashes">Lashes</Link>
              </MenuItem>

              <MenuItem eventKey={3.2}>
                <Link to="/perm_makeup">Permanent Makeup</Link>
              </MenuItem>

              <MenuItem eventKey={3.3}>
                <Link to="/waxing">Waxing</Link>
              </MenuItem>

              <MenuItem eventKey={3.4}>
                <Link to="/facials">Facials</Link>
              </MenuItem>

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

            {/*<NavItem activeHref href="https://www.schedulicity.com/scheduling/SFLPW8" className="">
                <span className="btn nav-schedule">Schedule Now</span>
            </NavItem>*/}
            <a  href="https://www.schedulicity.com/scheduling/SFLPW8" title="Online scheduling" rel="noopener noreferrer" target="_blank"><img className="schedule-btn" src="//cdn.schedulicity.com/images/schedulenow_lt_yellow3_md.png" alt="Online scheduling" title="Online scheduling" border="0" /></a>

          </Nav>
          <script type="text/javascript" src="https://www.schedulicity.com/api/public/widget/SFLPW8/popup"></script>
        </Navbar.Collapse>
      </Navbar>

          </div>
        );
    }
}

export default MyNavbar;
