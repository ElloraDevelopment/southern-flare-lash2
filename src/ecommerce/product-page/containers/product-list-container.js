//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/cms-actions.js";

import ProductList from "../components/product-list.js";

class ProductListContainer extends React.Component {
  componentWillMount() {
    this.props.loadProductData();
  }
  render() {
    return (
      <div className="product-list-container-wrapper">
        <ProductList products={this.props.products} />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, actionCreators) (ProductListContainer);
