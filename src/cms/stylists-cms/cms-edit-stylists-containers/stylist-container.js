//RENDER OUT COMPONENT AND HANDLE LOCAL STATE FOR INPUTS
import React from "react";
import autoBind from "react-autobind";

import Stylists from "../cms-edit-stylists-components/stylists.js";

class StylistsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.stylist
      }
    autoBind(this);
  };
  handleUpdate(key, event) {
      this.setState({
          [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value
      });
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.type === "checkbox" ? event.target.checked : event.target.value
    })
  }
  // clearInputs() {
  //   for(let key in this.state) {
  //     this.setState({
  //       [key]: key === "true" ? this.props.stylist.active : ""
  //     });
  //   }
  // }
  // handleSubmit(id, input) {
  //   let editObject = {
  //     ...this.state
  //   }
  //   // console.log("editObject");
  //   // console.log(editObject);
  //   for(let input in editObject) {
  //     if(!editObject[input]) {
  //       delete editObject[input];
  //     }
  //     this.props.handleEdit(id, editObject);
  //   }
  //   this.clearInputs();
  // }

  render() {
    console.log(this.state);
    return (
      <div className="stylists-container-wrapper">
        <Stylists inputs={this.state} handleUpdate={this.handleUpdate} handleChange={this.handleChange} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} stylist={this.props.stylist} />
      </div>
    )
  }
}

export default StylistsContainer;
