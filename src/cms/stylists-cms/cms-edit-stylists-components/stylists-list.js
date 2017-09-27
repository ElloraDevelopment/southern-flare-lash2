//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";
import Modal from "react-modal";
import autoBind from "react-autobind";

import StylistsContainer from "../cms-edit-stylists-containers/stylist-container.js";
import StylistsFormContainer from "../cms-add-stylists-containers/stylists-form-container.js";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  }
};

class StylistsList extends React.Component {
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
  genStylists() {
    return this.props.stylists.map((stylist, index) => {
      return <StylistsContainer handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} key={stylist.firstName + index} stylist={stylist} />
    });
  }
  render() {
    return (
      <div className="cms-edits-list-wrapper row">
        <button className="cms-add-button" onClick={this.openModal}>Add New Stylist</button>
        <h1>Edit Stylists:</h1>
        {this.genStylists()}
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Add New Stylist">
          <StylistsFormContainer />
          <button className="cms-button modal-button" onClick={this.closeModal}>Close Form</button>
        </Modal>
      </div>
    )
  }
}

export default StylistsList;
