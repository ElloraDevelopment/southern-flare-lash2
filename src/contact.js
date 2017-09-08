import React from 'react';
import GoogleMapReact from "google-map-react";
import FontAwesome from "react-fontawesome";
import Navbar from "./navbar.js";


class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <Navbar />
            <div className="row contact-box" >
                
                <div className="col-md-12 contact-us">Contact Us</div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 map" >
                    <GoogleMapReact center={{lat: 42.846275, lng: -106.328499}}
                        zoom={15} >
                            <div lat={42.846275} lng={-106.328499}><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/316+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986">
                            <FontAwesome className="marker" name="map-marker" size="3x"/></a></div>
                    </GoogleMapReact>
                  </div>
                    
                    </div>
                </div>
                
            </div>
        );
    }
}


export default Contact;