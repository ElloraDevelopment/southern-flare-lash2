import React, { Component } from 'react';
import Navbar from "../navbar.js";
import Footer from "../footer.js";

import { Link } from "react-router-dom";

class Lash extends Component {
    render() {
        return (
        <div>
            <div className="wrapper container-fluid">
                <Navbar />
                <div className="row text-center service-header">Lash Services</div>
    
    {/*PICTURE LEFT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-page-img  classic" style={{backgroundImage: 'url("images/sfl-pics/classic-lash/classic-lash1.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                        <p className="service-title">Classic Lashes</p>
                        <p>Classic lashes are one extension attached to one single natural lash. They are a natural looking set of lashes and normally take 1 1/2 to 2 hours for a full set and 45-60 minutes for a fill.</p>
                        <p>Full Set: $150</p>
                        <p>Two Week Fill: $45</p>
                        <p>Three Week Fill: $55</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE RIGHT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-para-desktop">
                        <p className="service-title">Volume Lashes</p>
                        <p>Volume lashes consist of 2-6 light weight extensions attached to one natural lash and create a fuller look. The lash weight can vary depending on clients natural lash thickness and health. A full set of takes about 2 1/2 to 3 hours to complete with fills at an hour to 1 1/2.</p>
                        <p>Full Set: $200</p>
                        <p>Two Week Fill: $65</p>
                        <p>Three Week Fill: $75</p>
                    </div> 
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-page-img service-img-right volume" style={{backgroundImage: 'url("images/sfl-pics/volume-lash/volume-lash2.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-para-mobile">
                        <p className="service-title">Volume Lashes</p>
                        <p>Volume lashes consist of 2-6 light weight extensions attached to one natural lash and create a fuller look. The lash weight can vary depending on clients natural lash thickness and health. A full set of takes about 2 1/2 to 3 hours to complete with fills at an hour to 1 1/2.</p>
                        <p>Full Set: $200</p>
                        <p>Two Week Fill: $65</p>
                        <p>Three Week Fill: $75</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE LEFT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-page-img  mega" style={{backgroundImage: 'url("images/sfl-pics/mega-volume/mega1.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                        <p className="service-title">Mega Volume</p>
                        <p>Mega Volume lashes are 5-15 extensions glued to one single natural lash. These lashes are very light weight (normally .03 or .04). This creates a dense black lash line. A full set takes 3 hours plus.</p>
                        <p>Full Set: $300</p>
                        <p>Two Week Fill: $65</p>
                        <p>Three Week Fill: $75</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE RIGHT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-para-desktop">
                        <p className="service-title">Lash Lift and Tint</p>
                        <p>A Lash Lift is a great low maintenance way to lift those straight lashes. In 45 minutes you can have longer looking, black, lifted  lashes that last from 8-12 weeks.</p>
                        <p>Price: $75</p>
                    </div> 
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-page-img service-img-right lift" style={{backgroundImage: 'url("images/sfl-pics/lash-lift/lash-lift1.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 service-para-mobile">
                        <p className="service-title">Lash Lift and Tint</p>
                        <p>A Lash Lift is a great low maintenance way to lift those straight lashes. In 45 minutes you can have longer looking, black, lifted  lashes that last from 8-12 weeks.</p>
                        <p>Price: $75</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

                <div className="row text-center any-questions">
                    Feel free to <Link className="contact-link" to="/contact">CONTACT US</Link> with any questions about our services.
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Lash;