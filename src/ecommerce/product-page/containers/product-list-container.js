//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/cms-actions.js";

import ProductList from "../components/product-list.js";

class ProductListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  componentWillMount() {
    this.props.loadProductData();
  }
  render() {
    return (
      <div className="product-list-container-wrapper">
        <ProductList input={this.state} products={this.props.products} updateCart={this.props.addCartData} handleChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, actionCreators) (ProductListContainer);
