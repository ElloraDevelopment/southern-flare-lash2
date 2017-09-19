//RENDER OUT PRODUCT
import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div className="products-component">
        {/* DISPLAY PRODUCT */}
          <div className="product-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}></div>
          <h3>{this.props.product.title}</h3>
          <h4>{this.props.product.desc}</h4>
          <h5>${this.props.product.price} | Status: {this.props.product.active ? "active" : "inactive"}</h5>

        {/* EDIT PRODUCT */}
          <span>
            <p>Change Picture: </p>
            <input className="pic-input" onChange={(event) => {this.props.handleUpdate("pic", event);}} placeholder="change picture" value={this.props.input.pic} />
            <p>Title: </p>
            <input onChange={(event) => {this.props.handleUpdate("title", event);}} placeholder="change title" value={this.props.input.title} />
            <p>Description: </p>
            <input onChange={(event) => {this.props.handleUpdate("desc", event);}} placeholder="change desc" value={this.props.input.desc} />
          </span>
          <span>
            <p>Price: </p>
            <input onChange={(event) => {this.props.handleUpdate("price", event);}} placeholder="change price" type="number" value={this.props.input.price} />
            <label>If checked active, will show on product page:</label>
            <input type="checkbox" checked={this.props.input.active} onChange={(event) => {this.props.handleUpdate("active", event)}} />
          </span>

          <button onClick={() => {this.props.handleEdit(this.props.product._id, this.props.input);}}>Update</button>
          <button onClick={() => {this.props.handleDelete(this.props.product._id);}}>Delete</button>

      </div>
    )
  }
}

export default Products;
