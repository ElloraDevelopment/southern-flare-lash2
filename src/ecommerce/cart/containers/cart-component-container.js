import React from 'react';
import axios from "axios";
import autoBind from 'react-autobind';

import { connect } from 'react-redux';

import CartComponent from '../components/cart-component.js';
import { setCartItemQuantity } from '../../../actions/ecom-actions.js';

class CartComponentContainer extends React.Component {
  //goes in container:
    constructor(props){
      super(props);
      this.state={
        product: {}
      }
      autoBind(this);
    }
    componentDidMount(){
      this.loadProduct();
    }
    handleSubtotal() {
      let sub = Number(this.state.product.price * this.props.cartQuantity).toFixed(2);
      return sub;
    }
    // genCartTotal() {
    //   console.log('called');
    //   return this.props.cartQuantity((price, quant) => {
    //     let total = Number(this.state.product.price * this.props.cartQuantity).toFixed(2);
    //     console.log(total);
    //     return total;
    //   })
    // }
    // genCart() {
    //   return this.props.cart.map((id, index) => {
    //     return <CartComponentContainer key={id + index} id={id} index={index} setCartQuantity={this.props.setCartQuantity} cartQuantity={this.props.cartQuantity[index]} handleRemove={this.props.handleRemove} />
    //   })
    // }
    loadProduct(){
      let id = this.props.id;
      let url = "http://localhost:8080/products/";
      axios.get(url + id).then((response)=>{
        this.setState({
          product: response.data.data
        })
      })
    }
  render() {
    return (
      <div className='cart-component-container-wrapper'>
        <CartComponent product={this.state.product} setCartQuantity={this.props.setCartQuantity} cartQuantity={this.props.cartQuantity} index={this.props.index} handleSubtotal={this.handleSubtotal} handleChange={this.handleChange} handleRemove={this.props.handleRemove} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({quantity: state.cartQuantity});

export default connect(mapStateToProps, {setCartItemQuantity})(CartComponentContainer);
