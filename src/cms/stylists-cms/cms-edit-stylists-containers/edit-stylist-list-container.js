//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/cms-actions.js";

import StylistsList from "../cms-edit-stylists-components/stylists-list.js";

class EditStylistsListContainer extends React.Component {
  componentWillMount() {
    this.props.loadStylistData();
  }
  render() {
    return (
      <div className="stylist-list-container-wrapper">
        <StylistsList stylists={this.props.stylists} handleDelete={this.props.deleteStylistData} handleEdit={this.props.editStylistData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {return state;}

export default connect(mapStateToProps, actionCreators) (EditStylistsListContainer);
