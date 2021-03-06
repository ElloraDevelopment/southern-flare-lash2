import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";
import autoBind from "react-autobind";

import { connect } from 'react-redux';

class MyNavbar extends Component {
  constructor(){
    super();
    this.state = {
      borderBottom: "2px solid darkgray"
    }
    autoBind(this);
  }

  changeNav() {
    if(document.location.pathname === "/lash_FAQ") {
      this.setState({
        borderBottom: "2px solid blue"
      })
    }
  }

  // componentDidMount() {
  //       window.addEventListener('onchange', this.changeNav, console.log("navchange"));
  //   }

    render() {
        return (
          <div className="navbar-container" id='hide-nav' style={{borderBottom: this.state.borderBottom}}>
            <Navbar collapseOnSelect fluid className="nav-custom">
        <Navbar.Header>
              <Link to="/" >
                {/*<Navbar.Brand>*/}
                  <img className="nav-brand" alt="southernflare-lash" src={"images/sfl-pics/logo/color-logo-copy.jpg"}/>
                {/*</Navbar.Brand>*/}
              </Link>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse >
          <Nav >
            {/*<NavItem>
              <Link to="/">
                <span className="nav-links">Home</span>
              </Link>
            </NavItem>*/}

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
                <MenuItem className="nav-dropdown-hover" eventKey={3.1}>
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

            <NavItem>
              <Link to="/cart">
              <div className='cart-icon-inline'>
                <span className="nav-links"><i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i></span>
                <span id="nav-cart-quant">({this.props.cart.length})</span>
              </div>
              </Link>

            </NavItem>

            <a href="https://www.schedulicity.com/scheduling/SFLPW8" target="_blank" className="custom-nav-btn">
                <span className="btn nav-schedule">Book Now</span>
            </a>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

          </div>
        );
    }
}

const mapStateToProps = (state) => ({cart: state.cart});

export default connect(mapStateToProps, {})(MyNavbar);
