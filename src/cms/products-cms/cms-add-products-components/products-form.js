import React from "react";

class ProductsForm extends React.Component {
  render() {
    return (
      <div className="products-form">
        <form>
          <ul className="flex-outer">
            <li>
              <label for="picture">Picture</label>
              <input type="text" id="picture" placeholder="product image" value={this.props.input.pic} onChange={(event) => {this.props.handleChange("pic", event)}} />
            </li>
            <li>
              <label for="title">Title</label>
              <input type="text" id="title" placeholder="title" value={this.props.input.title} onChange={(event) => {this.props.handleChange("title", event)}} />
            </li>
            <li>
              <label for="desc">Description</label>
              <textarea rows="8" type="text" id="desc" placeholder="desc" value={this.props.input.desc} onChange={(event) => {this.props.handleChange("desc", event)}}></textarea>
            </li>
            <li>
              <label for="price">Price</label>
              <input type="number" id="price" placeholder="price" value={this.props.input.price} onChange={(event) => {this.props.handleChange("price", event)}} />
            </li>
            <li>
              <p>Status</p>
              <ul className="flex-inner">
                <li>
                  <input type="checkbox" checked={this.props.input.active} onChange={(event) => {this.props.handleChange("active", event)}} />
                  <label>Check if Active</label>
                </li>
              </ul>
            </li>
            <li>
              <button className="add-item" onClick={() => {this.props.handleClick(this.props.input); this.props.clearInputs();}}>Add Product</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default ProductsForm;
