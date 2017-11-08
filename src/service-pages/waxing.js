import React, { Component } from 'react';

import Footer from "../footer.js";
import Navbar from "../navbar.js";

import { Link } from "react-router-dom";

class Waxing extends Component {
    render() {
        return (
            <div>
                <div className="wrapper container-fluid">
                    <Navbar />
                    <div className="row text-center section-header">
                      <h1>Waxing</h1>
                    </div>

                    <div className="row flex-vert-align">
                        <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img waxing-img" style={{backgroundImage: 'url("images/sfl-pics/waxing/services-waxing.jpg")'}}></div>
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-right">
                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Brazilian</p>  <p className="wax-price">$70+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Underarms</p>  <p className="wax-price">$30+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Brows</p>  <p className="wax-price">$10+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Lip</p>  <p className="wax-price">$10+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Full Face</p>  <p className="wax-price">$40+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Arms</p>  <p className="wax-price">$40+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Full Legs</p>  <p className="wax-price">$50+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Chest</p>  <p className="wax-price">$40+</p>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <p className="wax-name">Back</p>  <p className="wax-price">$50+</p>
                            </div>

                        </div>
                    </div>

                <div className="row gray-line waxing-line"></div>

                    <center>    
                        <a target="_blank" href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
                            <span className="btn nav-schedule book-now">Book Now</span>
                        </a>
                    </center>

                    <div className="row text-center any-questions">
                        Feel free to <Link className="contact-link" to="/contact">CONTACT US</Link> with any questions about our services.
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Waxing;
