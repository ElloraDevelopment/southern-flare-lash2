import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/cms-actions.js";

import StylistList from "../components/stylist-list.js";
import Navbar from "../../navbar.js";
import Footer from "../../footer.js";

class StylistListContainer extends React.Component {
  componentWillMount() {
    this.props.loadStylistData();
  }
  render() {
    return (
      <div id="staff" className="stylist-list-container-wrapper">
        <div className="wrapper nav-stylistlist-block">
          <Navbar />
          <StylistList stylists={this.props.stylists} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, actionCreators)(StylistListContainer);
