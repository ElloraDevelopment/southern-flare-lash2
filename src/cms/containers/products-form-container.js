import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as cmsActionCreators from "../../actions/cms-actions.js";

import ProductsForm from "../components/products-form.js";

class ProductsFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      pic: "",
      title: "",
      desc: "",
      price: 0,
      active: false
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    })
  }
  render() {
    return (
      <div className="products-form-container">
        <ProductsForm input={this.state} handleChange={this.handleChange} handleClick={this.props.addProductData} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, cmsActionCreators) (ProductsFormContainer);
