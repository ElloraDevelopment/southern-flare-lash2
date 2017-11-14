import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./landing/home.js";
import Contact from "./contact.js";
import LashFAQ from "./faq/lash-FAQ.js";
import PermFAQ from "./faq/perm-makeup-FAQ.js";
import Lash from "./service-pages/lash.js";
import PermMakeup from "./service-pages/perm-makeup.js";
import Facials from "./service-pages/facials.js";
import Waxing from "./service-pages/waxing.js";

import {HashRouter, Route, Switch} from "react-router-dom";

import AuthComponent from "./authentication/auth.js";

import ProductListContainer from "./ecommerce/product-page/containers/product-list-container.js";
import CartListContainer from "./ecommerce/cart/containers/cart-list-container.js";
import StylistListContainer from "./stylist-page/containers/stylist-list-container.js";
import CheckoutContainer from './ecommerce/checkout/containers/checkout-container.js';


import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Favicon from "react-favicon";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Favicon url={"images/sfl-pics/home-icons/lash-icon.jpg"}/>

        {/* <CartListContainer /> */}
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/lash_FAQ" component={LashFAQ} />
            <Route exact path="/perm_FAQ" component={PermFAQ} />
            <Route exact path="/lashes" component={Lash} />
            <Route exact path="/perm_makeup" component={PermMakeup} />
            <Route exact path="/facials" component={Facials} />
            <Route exact path="/waxing" component={Waxing} />
            <Route exact path="/staff" component={StylistListContainer} />
            <Route exact path="/product" component={ProductListContainer} />
            <Route exact path="/cart" component={CartListContainer} />
            <Route exact path="/login" component={AuthComponent} />
            <Route exact path='/charge' component={CheckoutContainer} />
          </Switch>
        </HashRouter>

      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
