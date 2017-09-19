//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import ProductPageComponent from "./product-page-component.js";
// import ProductPageContainer from "../containers/product-page-container.js";

class ProductList extends React.Component {
  genProducts() {
    let activeProducts = this.props.products.filter((product) => {
      return product.active;
    });
      return activeProducts.map((product, index) => {
        return <ProductPageComponent key={product.title + index} product={product} updateCart={this.props.updateCart} handleChange={this.props.handleChange} input={this.props.input} />
      });
  }
  render() {
    return (
      <div className="product-list-wrapper">
        <h2>Products</h2>
        {this.genProducts()}
      </div>
    )
  }
}

export default ProductList;
