//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import * as cmsActionCreators from "../../../actions/cms-actions.js";
import * as ecomActionCreators from "../../../actions/ecom-actions.js";

import Navbar from "../../../navbar.js";
import Footer from "../../../footer.js";
import ProductList from "../components/product-list.js";


class ProductListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
    }
    autoBind(this);
  }

  // addItemToCart(id) {
  //   this.setState((prevState)=>{
  //     if(prevState.cart.indexOf(id) < 0){
  //     return {
  //       cart: [...prevState.cart, id]
  //     }
  //   } else {
  //     return {
  //       ...prevState
  //     }
  //   }
  //   })
  // }
  itemAdded() {
    document.querySelector('.item-added').innerHTML = "item added";
  }
  componentDidUpdate(){
   sessionStorage.setItem('cart', JSON.stringify(this.props.cart));
   sessionStorage.setItem('quant', JSON.stringify(this.props.cartQuantity));
  }
  componentWillMount() {
    this.props.loadProductData();
  }
  componentDidMount(){
    let currentCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    this.props.setCartData(currentCart);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="product-list-container-wrapper">
        <div className="wrapper">
          <Navbar />
          <ProductList input={this.state} products={this.props.products} addItemToCart={this.props.addItemToCart} itemAdded={this.itemAdded}/>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; }

export default connect(mapStateToProps, {...cmsActionCreators, ...ecomActionCreators}) (ProductListContainer);
