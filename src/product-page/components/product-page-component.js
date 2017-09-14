import React from "react";

class ProductPageComponent extends React.Component {
  render() {
    return (
      <div className="product-page-component-wrapper">
        <div className="product-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}></div>
        <h3>{this.props.product.title}</h3>
        <h4>{this.props.product.desc}</h4>
        <h4>${this.props.product.price}</h4>
      </div>
    )
  }
}

export default ProductPageComponent;
