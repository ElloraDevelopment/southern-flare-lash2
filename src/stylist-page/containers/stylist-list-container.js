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
<<<<<<< HEAD
      <div id="staff" className="stylist-list-container-wrapper">
        <StylistList stylists={this.props.stylists} />
=======
      <div className="stylist-list-container-wrapper">
        <div className="wrapper">
          <Navbar />
          <StylistList stylists={this.props.stylists} />
        </div>
        <Footer />
>>>>>>> 3eee1d9b14f821cf8e9c37292f5bd799fa3a12d7
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, actionCreators)(StylistListContainer);
