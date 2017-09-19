//RENDER OUT PRODUCT
import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div className="products-component">
          <div className="product-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}>
            <input className="img-input" onChange={(event) => {this.props.handleEdit("pic", event);}} placeholder="change picture" />
          </div>

          <h3>{this.props.product.title}</h3>
          <h4>{this.props.product.desc}</h4>
          <span>
            <input onChange={(event) => {this.props.handleEdit("title", event);}} placeholder="change title" value={this.props.input.title} />
            <input onChange={(event) => {this.props.handleEdit("desc", event);}} placeholder="change desc" value={this.props.input.desc} />
          </span>

          <h5>${this.props.product.price} | {this.props.product.active}</h5>
          <span>
            <input onChange={(event) => {this.props.handleEdit("price", event);}} placeholder="change price" type="number" value={this.props.input.price} />
            <select value={this.props.input.active} onChange={(event) => {this.props.handleEdit("active", event)}} >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </span>

          <button onClick={() => {this.props.handleUpdate(this.props.products._id, this.props.input);}}>Update</button>
          <button onClick={() => {this.props.handleDelete(this.props.products._id);}}>Delete</button>

      </div>
    )
  }
}

{/* products: [
  {
    pic: "",
    title: "",
    desc: "",
    price: 0,
    active: ""
  }
],  */}

export default Products;
