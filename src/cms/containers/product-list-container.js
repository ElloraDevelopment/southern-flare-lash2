//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/cms-actions.js";

import ProductsList from "../components/products-list.js";

class ProductsListContainer extends React.Component {
  componentWillMount() {
    this.props.loadProductData();
  }
  render() {
    return (
      <div className="product-list-container-wrapper">
        <ProductsList products={this.props.products} handleDelete={this.props.deleteProductData} handleEdit={this.props.editProductData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {return state;}

export default connect(mapStateToProps, actionCreators) (ProductsListContainer);
