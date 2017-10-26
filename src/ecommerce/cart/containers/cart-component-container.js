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
        quantity: props.quantity
      }
      autoBind(this);
    }
    componentDidMount(){
      this.loadProduct();
    }
    handleChange(event) {
      this.setState({
        quantity: event.target.value
      })
    }
    //should checks this first before it will go to componentDidUpdate
    shouldComponentUpdate(nextProps, nextState) {
      console.log(nextState, this.state);
      // return this.state.quantity != nextProps.quantity || (this.state.quantity != nextState.quantity && this.state.quantity == nextProps.quantity)
    }
    componentDidUpdate() {
      this.props.setCartItemQuantity(this.props.index, this.state.quantity);
    }
      // sessionStorage.setItem('quant', JSON.stringify(this.state.quantity));
      // this.setState({
      //   quantity: JSON.parse(sessionStorage.getItem("quant")) || 1
      // })

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
        <CartComponent product={this.state.product} quantity={this.state.quantity} index={this.props.index} handleChange={this.handleChange} handleRemove={this.props.handleRemove} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({quantity: state.cartQuantity});

export default connect(mapStateToProps, {setCartItemQuantity})(CartComponentContainer);
