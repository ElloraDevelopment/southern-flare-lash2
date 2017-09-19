import React from "react";

import EditProductsListContainer from "./products-cms/cms-edit-products-containers/edit-product-list-container.js";
import EditStylistsListContainer from "./stylists-cms/cms-edit-stylists-containers/edit-stylist-list-container.js";
import StylistsFormContainer from "./stylists-cms/cms-add-stylists-containers/stylists-form-container.js";
import ProductsFormContainer from "./products-cms/cms-add-products-containers/products-form-container.js";

class CmsComponent extends React.Component {
  render() {
    return (
      <div className="cms-component">
        <StylistsFormContainer />
        <EditStylistsListContainer />

        <ProductsFormContainer />
        <EditProductsListContainer />
      </div>
    )
  }
}

export default CmsComponent;
