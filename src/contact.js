import React from 'react';
import GoogleMapReact from "google-map-react";
import FontAwesome from "react-fontawesome";
import Navbar from "./navbar.js";
import Footer from "./footer.js";


class Contact extends React.Component {
    render() {
        return (
        <div>
            <div className="wrapper container-fluid">
                <Navbar />
                <div className="row text-center service-header">Contact Us</div>
                
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12 contact-info">
                        <div className="link-wrapper">
                            <a className="contact-links" target="_blank" href="tel:336-212-0188"><strong>Phone</strong> | (307)-277-1828</a>
                    
                            <a className="contact-links" target="_blank" href="https://www.google.com/maps/place/314+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986"><strong>Address</strong> | 314 W Midwest Ave Casper, WY 82601</a>
                    
                            <a className="contact-links" target="_blank" href="mailto:southernFlareLash@hotmail.com"><strong>Email</strong> | southernflarelash@hotmail.com</a>
                            <div className="contact-icons-wrapper text-center">
                                <a className="contact-icons" href="tel:+1-336-212-0188" >
                                    <FontAwesome name="phone" size="2x"/>
                                </a>

                                <a className="contact-icons" href="mailto:southernFlareLash@hotmail.com" >
                                    <FontAwesome name="envelope-o" size="2x"/>
                                </a>

                                <a className="contact-icons" target="_blank" href="https://www.facebook.com/Southernflarelash/?pnref=lhc" >
                                    <FontAwesome name="facebook" size="2x"/>
                                </a>

                                <a className="contact-icons" target="_blank" href="https://www.instagram.com/southernflarelash/">
                                    <FontAwesome name="instagram" size="2x"/>
                                </a>
                            </div>

                            <center>    
                                <a activeHref target="_blank" href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
                                    <span className="btn nav-schedule book-now">Book Now</span>
                                </a>
                            </center>
                         
                        </div>
                    
                    </div>
                
                    <div className="col-md-6 col-sm-6 col-xs-12 map" >
                        <GoogleMapReact center={{lat: 42.846275, lng: -106.328499}} zoom={15} >
                            <div lat={42.846275} lng={-106.328499}><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/316+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986">
                                <FontAwesome className="marker" name="map-marker" size="3x"/></a>
                            </div>
                        </GoogleMapReact>
                    </div>
                    
                </div>
                
            </div>
                <Footer />
            </div>
        );
    }
}


export default Contact;