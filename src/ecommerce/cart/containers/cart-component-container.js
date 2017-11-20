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
      let sub = Number(this.state.product.price * this.props.cartQuantity);
      this.props.setCartSubtotal(this.props.index, sub);
      sub = sub.toFixed(2);
      return sub;
    }
    loadProduct(){
      let id = this.props.id;
      let url = "/products/";
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
