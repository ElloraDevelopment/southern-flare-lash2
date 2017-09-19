import React from "react";

class ProductsForm extends React.Component {
  render() {
    return (
      <div className="products-form">
        <input type="" placeholder="product image" value={this.props.input.pic} onChange={(event) => {this.props.handleChange("pic", event)}} />
        <input type="text" placeholder="title" value={this.props.input.title} onChange={(event) => {this.props.handleChange("title", event)}} />
        <input type="text" placeholder="desc" value={this.props.input.desc} onChange={(event) => {this.props.handleChange("desc", event)}} />
        <input type="number" placeholder="price" value={this.props.input.price} onChange={(event) => {this.props.handleChange("price", event)}} />
        <label>Check if Active</label>
        <input type="checkbox" checked={this.props.input.active} onChange={(event) => {this.props.handleChange("active", event)}} />
        <button className="add-item" onClick={() => {this.props.handleClick(this.props.input); this.props.clearInputs();}}>Add Item</button>
        {/* <button className="edit-item">Edit Item</button>
        <button className="remove-item">Remove Item</button> */}
      </div>
    )
  }
}

export default ProductsForm;
