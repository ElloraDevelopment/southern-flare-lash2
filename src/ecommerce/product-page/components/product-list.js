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
        return <ProductPageComponent key={product.title + index} product={product} addItemToCart={this.props.addItemToCart} itemAdded={this.props.itemAdded} input={this.props.input} />
      });
  }
  render() {
    return (
      <div className="product-list-wrapper">
        <h1>Southern Flare Lash Products</h1>
        <h2>We sell Elleebana Products Cornhole narwhal kale chips, whatever live-edge coloring book keffiyeh 3 wolf moon tacos sriracha enamel pin man bun bespoke hella edison bulb. Banh mi man braid plaid, asymmetrical seitan sartorial poutine kogi lumbersexual vinyl adaptogen flannel gastropub.</h2>
        <section className="products">
          {this.genProducts()}
        </section>
      </div>
    )
  }
}

export default ProductList;
