import React from "react";
import ReactDOM from "react-dom";

import AuthComponent from "./authentication/auth.js";
import CmsComponent from "./cms/cms.js";
import ProductListContainer from "./product-page/containers/product-list-container.js";
import Ecwid from "./ecommerce-ecwid/ecwid.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ProductListContainer />
        <AuthComponent />
        <CmsComponent />
        <Ecwid />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
