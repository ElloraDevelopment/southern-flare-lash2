import React from "react";

import ProductsFormContainer from "./containers/products-form-container.js";

class CmsComponent extends React.Component {
  render() {
    return (
      <div className="cms-component">
        <ProductsFormContainer />
      </div>
    )
  }
}

export default CmsComponent;
