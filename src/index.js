import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./landing/home.js";
import Contact from "./contact.js";
import LashFAQ from "./faq/lash-FAQ.js";
import PermFAQ from "./faq/perm-makeup-FAQ.js";
import Lash from "./service-pages/lash.js";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import AuthComponent from "./authentication/auth.js";
import CmsComponent from "./cms/cms.js";

import ProductListContainer from "./ecommerce/product-page/containers/product-list-container.js";
import CartListContainer from "./ecommerce/cart/containers/cart-list-container.js";
import StylistListContainer from "./stylist-page/containers/stylist-list-container.js";


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <AuthComponent />
        <CmsComponent />
        <CartListContainer />
        <ProductListContainer />
        <StylistListContainer />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/lash_FAQ" component={LashFAQ} />
            <Route exact path="/perm_FAQ" component={PermFAQ} />
            <Route exact path="/lashes" component={Lash} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
