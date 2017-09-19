import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import * as actionCreators from "../actions/cms-actions";

import ProductsListContainer from "./containers/product-list-container.js";
import EditStylistsListContainer from "./stylists-cms/cms-edit-stylists-containers/edit-stylist-list-container.js";
import StylistsFormContainer from "./stylists-cms/cms-add-stylists-containers/stylists-form-container.js";
import ProductsFormContainer from "./containers/products-form-container.js";

class CmsComponent extends React.Component {
  componentWillMount() {
    this.props.loadProductData();
  }
  render() {
    return (
      <div className="cms-component">
        <StylistsFormContainer />
        <EditStylistsListContainer handleUpdate={this.props.editStylistData} handleDelete={this.props.deleteStylistData} />

        <ProductsFormContainer />
        <ProductsListContainer handleUpdate={this.props.editProductData} handleDelete={this.props.deleteProductData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {return state;};

export default connect(mapStateToProps, actionCreators) (CmsComponent);
