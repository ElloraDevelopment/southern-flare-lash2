import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as cmsActionCreators from "../../../actions/cms-actions.js";

import ProductsForm from "../cms-add-products-components/products-form.js";

class ProductsFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      pic: "",
      title: "",
      desc: "",
      price: 0,
      quantity: 0,
      active: false
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
      <div className="products-form-container">
        <h1>Add Product:</h1>
        <ProductsForm input={this.state} clearInputs={this.clearInputs} handleChange={this.handleChange} handleClick={this.props.addProductData} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, cmsActionCreators) (ProductsFormContainer);
