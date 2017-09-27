//RENDER OUT PRODUCT
import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div className="products-wrapper col-sm-6 col-md-3">
        {/* DISPLAY PRODUCT */}
        <div className="product-preview">
          <div className="product-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}></div>
          <h2>{this.props.product.title}</h2>
          <textarea type="text" rows="7">{this.props.product.desc}</textarea>
          <h4>${this.props.product.price} | Status: {this.props.product.active ? "active" : "inactive"}</h4>
        </div>

        <div className="edit-divider">
          <div className="line-left"></div>
          <i className="fa fa-star" aria-hidden="true"></i>
          <div className="line-right"></div>
        </div>

        {/* EDIT PRODUCT */}
          <div className="edit-inputs">
            <h4>Change Picture: </h4>
            <input className="pic-input" onChange={(event) => {this.props.handleUpdate("pic", event);}} placeholder="change picture" value={this.props.input.pic} />
            <h4>Title: </h4>
            <input onChange={(event) => {this.props.handleUpdate("title", event);}} placeholder="change title" value={this.props.input.title} />
            <h4>Description: </h4>
            <textarea type="text" rows="7" onChange={(event) => {this.props.handleUpdate("desc", event);}} placeholder="change desc" value={this.props.input.desc}></textarea>
            <h4>Price: </h4>
            <input onChange={(event) => {this.props.handleUpdate("price", event);}} placeholder="change price" type="number" value={this.props.input.price} />
            <label className="edit-checkbox">Check if active (will show on page): </label>
            <input className="edit-checkbox" type="checkbox" checked={this.props.input.active} onChange={(event) => {this.props.handleUpdate("active", event)}} />
          </div>

          <button className="cms-button" onClick={() => {this.props.handleEdit(this.props.product._id, this.props.input);}}>Update</button>
          <button className="cms-button" onClick={() => {this.props.handleDelete(this.props.product._id);}}>Delete</button>

      </div>
    )
  }
}

export default Products;
