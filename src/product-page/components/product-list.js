//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import ProductPageComponent from "./product-page-component.js";
// import ProductPageContainer from "../containers/product-page-container.js";

class ProductList extends React.Component {
  genProducts() {
    return this.props.products.map((product, index) => {
      return <ProductPageComponent key={product.title + index} product={product}  />
    });
  }
  render() {
    return (
      <div className="product-list-wrapper">
        {this.genProducts()}
      </div>
    )
  }
}

export default ProductList;