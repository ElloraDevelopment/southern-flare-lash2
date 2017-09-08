import React, { Component } from 'react';

import Navbar from "../navbar.js";
import Footer from "../footer.js";
import Header from "./header.js";
import Services from "./services.js";

class Home extends Component {
    render() {
        return (
            <div>
              <Navbar /> 
              <div className="container-fluid">
                <Header />
                <Services/>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Home;