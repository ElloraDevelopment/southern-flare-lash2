import React from "react";

class ProductPageComponent extends React.Component {
  render() {
    return (
      <div className="product-page-component-wrapper product-card">
        <div className="product-image">
          <div className="product-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}></div>
        </div>
        <div className="product-info">
          <h3 className="product-title">{this.props.product.title}</h3>
          <h4 className="product-desc">{this.props.product.desc}</h4>
          <div className="price-cart">
            <h4 className="product-price">${this.props.product.price}</h4>
            <button className="add-button" onClick={() =>
              {this.props.updateCart(this.props.product._id, this.props.product.pic, this.props.product.title, this.props.product.desc, this.props.product.price, this.props.product.quantity)}}
              >Add to Cart</button>
          </div>
          {/* <div className="quantity-cart"> */}
            {/* <h4>enter quantity and add to cart:</h4> */}
            {/* <input className="add-quantity" type="number" placeholder="quantity" value={this.props.input.quantity} onChange={(event) => {this.props.handleChange("quantity", event)}}/> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

export default ProductPageComponent;
