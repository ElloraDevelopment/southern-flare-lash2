//RENDER OUT COMPONENT AND HANDLE LOCAL STATE FOR INPUTS
import React from "react";
import autoBind from "react-autobind";

import Products from "../components/products.js";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      ...this.props.products
    };
    autoBind(this);
  }
  handleUpdate(key, event) {
      this.setState({
          [key]: event.target.value
      })
  }
  render() {
    return (
      <div className="products-container-wrapper">
        <Products input={this.state} handleUpdate={this.handleUpdate} handleEdit={this.props.editProductData} handleDelete={this.props.handleDelete} product={this.props.product} />
      </div>
    )
  }
}

export default ProductsContainer;
