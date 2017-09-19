//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import ProductsContainer from "../containers/products-container.js";

class ProductsList extends React.Component {
  genProducts() {
    return this.props.products.map((product, index) => {
      return <ProductsContainer handleDelete={this.props.deleteProductData} handleEdit={this.props.editProductData} key={product.title + index} product={product} />
    });
  }
  render() {
    return (
      <div className="products-list-wrapper">
        <h2>Edit Products:</h2>
        {this.genProducts()}
      </div>
    )
  }
}

export default ProductsList;
