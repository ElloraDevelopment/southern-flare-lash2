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
        product: {},
        quantity: props.quantity[props.index]
      }
      autoBind(this);
    }
    componentDidMount(){
      this.loadProduct();
    }
    handleChange(event) {
      this.setState({
        quantity: Number(event.target.value)
      })

    }
    handleSubtotal() {
      let sub = Number(this.state.product.price * this.state.quantity).toFixed(2);
      return sub;
    }


    //COMPONENT SHOULD UPDATE AND COMPONENT DID UPDATE CREATING MAX STACK CALL SIZE EXCEEDED
    //should checks this first before it will go to componentDidUpdate
    // shouldComponentUpdate(nextProps, nextState) {
    //   if(this.state.quantity !== nextProps.quantity[this.props.index] ) {
    //     return true;
    //   }
    //   if(Object.keys(this.state.product).length === 0) {
    //     return true;
    //   }
    //   let compareQuant = JSON.parse(sessionStorage.getItem('quant'))[this.props.index];
    //   if(this.state.quantity !== compareQuant) {
    //     return true;
    //   }
    //   return false;
    // }
    // componentDidUpdate() {
    //   this.props.setCartItemQuantity(this.props.index, this.state.quantity);
    //   sessionStorage.setItem('quant', JSON.stringify(this.props.quantity));
    // }
      // sessionStorage.setItem('quant', JSON.stringify(this.state.quantity));
      // this.setState({
      //   quantity: JSON.parse(sessionStorage.getItem("quant")) || 1
      // })




    //OLDER CODE
    // componentDidMount(){
    //   let currentQuant = JSON.parse(sessionStorage.getItem('quant')) ;
    //   this.setState({
    //     quantity: currentQuant
    //   })
    // }
    // componentDidUpdate() {
    //   sessionStorage.setItem('quant', JSON.stringify(this.state.quantity));
    //
    //   // componentDidUpdate() {return JSON.parse(sessionStorage.getItem("quant")) || 1}
    //   console.log(sessionStorage)
    // }
    // componentDidMount() {
    //     this.setState(
    //         {
    //             ...this.state,
    //             quantity: JSON.parse(sessionStorage.getItem("quant")) || 1
    //         }
    //     )
    // }
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
        <CartComponent product={this.state.product} quantity={this.state.quantity} index={this.props.index} handleSubtotal={this.handleSubtotal} handleChange={this.handleChange} handleRemove={this.props.handleRemove} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({quantity: state.cartQuantity});

export default connect(mapStateToProps, {setCartItemQuantity})(CartComponentContainer);
