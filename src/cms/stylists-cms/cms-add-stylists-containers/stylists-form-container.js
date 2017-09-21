import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as cmsActionCreators from "../../../actions/cms-actions.js";

import StylistsForm from "../cms-add-stylists-components/stylists-form.js";

class StylistsFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      pic: "",
      firstName: "",
      lastName: "",
      bio: "",
      services: [],
      instagram: "",
      active: ""
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    })
  }
  clearInputs() {
    for(let key in this.state) {
      this.setState({
        [key]: ""
      });
    }
  }
  render() {
    return (
      <div className="stylists-form-container">
        <h1>Add Stylist:</h1>
        <StylistsForm input={this.state} clearInputs={this.clearInputs} handleChange={this.handleChange} handleClick={this.props.addStylistData} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, cmsActionCreators) (StylistsFormContainer);
