import React, { Component } from 'react';

import Navbar from "../navbar.js";
import Footer from "../footer.js";
import Header from "./header.js";
import Services from "./services.js";

class Home extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     cartQuantity: ""
  //   }
  // }
  // componentDidMount(){
  //   let currentCart = JSON.parse(sessionStorage.getItem('cart'));
  //   this.setState({
  //     cartQuantity: currentCart.length
  //   })
  // }
    render() {
        return (
            <div>
              <div className="container-fluid wrapper">
                <Navbar />
                <Header />
                <Services/>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Home;
