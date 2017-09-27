//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/cms-actions.js";

import Navbar from "../../../navbar.js";
import Footer from "../../../footer.js";
import ProductList from "../components/product-list.js";


class ProductListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: []
    }
    autoBind(this);
  }
  handleChange(event, index) {
    this.setState((prevState)=>{
      //logic here
      let newCart = [...prevState.cart];
      //check if there is a current product
      if(!prevState[index]){

      }
      return {
        cart: newCart
      }
    })
  }
  componentWillMount() {
    this.props.loadProductData();
  }
  render() {
    return (
      <div className="product-list-container-wrapper">
        <div className="wrapper">
          <Navbar />
          <ProductList input={this.state} products={this.props.products} updateCart={this.props.addCartData} handleChange={this.handleChange}/>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, actionCreators) (ProductListContainer);
