import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as cmsActionCreators from "../../actions/cms-actions.js";

import StylistsForm from "../components/stylists-form.js";

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
      [key]: event.target.value
    })
  }
  render() {
    return (
      <div className="products-form-container">
        <StylistsForm input={this.state} handleChange={this.handleChange} handleClick={this.props.addStylistData} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, cmsActionCreators) (StylistsFormContainer);
