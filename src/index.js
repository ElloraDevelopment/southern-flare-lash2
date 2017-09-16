import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./landing/home.js";
import Contact from "./contact.js";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import AuthComponent from "./authentication/auth.js";
import CmsComponent from "./cms/cms.js";
import ProductListContainer from "./ecommerce/product-page/containers/product-list-container.js";
import CartListContainer from "./ecommerce/cart/containers/cart-list-container.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <CartListContainer />
        <ProductListContainer />
        <AuthComponent />
        <CmsComponent />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
