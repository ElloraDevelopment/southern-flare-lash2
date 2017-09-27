import React from "react";
import autoBind from "react-autobind";

import EditProductsListContainer from "./products-cms/cms-edit-products-containers/edit-product-list-container.js";
import EditStylistsListContainer from "./stylists-cms/cms-edit-stylists-containers/edit-stylist-list-container.js";
import Navbar from "../navbar.js";

import { connect } from "react-redux";
import * as actionCreators from "../actions/cms-actions.js";

class CmsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      didReq: false
    }
    autoBind(this);
  }
  // componentDidUpdate() {
  //   if(this.props.loadStylistData.length <= 0 && this.props.priv === "admin" && !this.state.didReq) {
  //     this.props.loadStylistData();
  //     this.props.loadProductData();
  //     this.setState({
  //       didReq: !this.state.didReq
  //     });
  //   }
  // }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }
  scrollFunction() {
    if(document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) {
      document.getElementById('scrollBtn').style.display = 'block';
      document.getElementById('logout-btn').style.display = 'block';
    } else {
      document.getElementById('scrollBtn').style.display = "none";
      document.getElementById('logout-btn').style.display = 'none';
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {
    return (
        <div className="cms-component container-fluid" style={{display: this.props.token ? 'inherit' :' none'}}>
          <button onClick={() => {this.topFunction()}} id="scrollBtn" title="Go to top">Back to Top</button>
          <button className="admin-logout-button" id="logout-btn" title="logout" onClick={() => this.props.handleLogout()}>Log Out</button>
          <div className="header-block-cms">
            <h1 className="cms-h1"><a href="#edit-products">Products  |</a></h1>
            <h1 className="cms-h1"><a href="#edit-stylists">  Stylists  |</a></h1>
            <h1 className="cms-h1"><a href="#user-que">  Admin</a></h1>
          </div>

          <div id="#edit-products"><EditProductsListContainer /></div>
          <div id="edit-stylists"><EditStylistsListContainer priv={this.props.priv} token={this.props.token} /></div>
        </div>
    )
  }
}

const mapStateToProps = (state) => { return state }

export default connect(mapStateToProps, actionCreators) (CmsComponent);
