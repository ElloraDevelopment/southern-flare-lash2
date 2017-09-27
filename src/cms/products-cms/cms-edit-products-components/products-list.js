//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";
import Modal from "react-modal";
import autoBind from "react-autobind";

import ProductsContainer from "../cms-edit-products-containers/products-container.js";
import ProductsFormContainer from "../cms-add-products-containers/products-form-container.js";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  }
};

class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    autoBind(this);
  }
  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    document.getElementById('hide-nav').style.display = "none";
    document.getElementById('scrollBtn').style.zIndex = '-99';
  }
  closeModal() {
    this.setState({
      modalIsOpen: false
    });
    document.getElementById('hide-nav').style.display = "unset";
    document.getElementById('scrollBtn').style.zIndex = '99';
  }
  genProducts() {
    return this.props.products.map((product, index) => {
      return <ProductsContainer handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} key={product.title + index} product={product} />
    });
  }
  render() {
    return (
      <div className="cms-edits-list-wrapper row">
        <button className="cms-add-button" onClick={this.openModal}>Add New Product</button>
        <h1>Edit Products:</h1>
        {this.genProducts()}
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} onAfterOpen={this.afterOpenModal} style={customStyles} contentLabel="Add Stylist">
          <ProductsFormContainer />
          <button className="cms-button modal-button" onClick={this.closeModal}>Close Form</button>
        </Modal>
      </div>
    )
  }
}

export default ProductsList;
