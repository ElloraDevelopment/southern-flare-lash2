import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Navbar from "../navbar.js";
import Footer from "../footer.js";
import FontAwesome from "react-fontawesome";


class PermMakeup extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }
    scrollFunction() {
        if(document.body.scrollTop > 20  || document.documentElement.scrollTop > 20) {
            document.getElementById('scrollBtn').style.display = 'block';
        } else {
            document.getElementById('scrollBtn').style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.topFunction()}} id="scrollBtn" className="service-scroll-btn" title="Go to top"><FontAwesome name="angle-up" size="2x"/></button>
                <div className="wrapper container-fluid">
                <Navbar />
                <div className="row text-center service-header">Permanent Makeup</div>
    
    {/*PICTURE LEFT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img  microstroking" style={{backgroundImage: 'url("images/sfl-pics/microstroking/microstroking.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-right">
                        <p className="service-title">Microblading/Microstroking</p>
                        <p>Microblading (also referred to as Microstroking, Eyebrow Embroidery, Feather Stroke Brows, 3D Brows, or Micro Pigmentation, etc) is the process of manually implanting color pigment beneath the surface of the skin by means of tiny, sterile, disposable needles to produce the appearance of hair strokes. The result is a very natural looking, well shaped, fuller brow that you won’t have to fill in with cosmetics everyday.</p>
                        <p>Price: $400</p>
                        <p>Price includes perfecting session at 6-8 weeks.</p>
                        <p>More <Link to="/perm_FAQ">QUESTIONS</Link> about Microblading?</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE RIGHT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-desktop">
                        <p className="service-title">Ombre/Powder Brows</p>
                        <p>Ombre brow is a beautiful technique that starts with a darker tail of the brow and fades to a lighter front of the brow. This brow heals very natural and powdery. The ombre brow can last from 3-5 years depending on skin type and texture.</p>
                        <p>Price: $400</p>
                        <p>*Price includes perfecting session at 6-8 weeks.</p>
                    </div> 
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img service-img-right ombre" style={{backgroundImage: 'url("images/sfl-pics/ombre-brow/ombre1.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-mobile">
                        <p className="service-title">Ombre/Powder Brows</p>
                        <p>Ombre brow is a beautiful technique that starts with a darker tail of the brow and fades to a lighter front of the brow. This brow heals very natural and powdery. The ombre brow can last from 3-5 years depending on skin type and texture.</p>
                        <p>Price: $400</p>
                        <p>*Price includes perfecting session at 6-8 weeks.</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE LEFT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img  hairstroke" style={{backgroundImage: 'url("images/sfl-pics/hairstroke/hairstroke.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-right">
                        <p className="service-title">Hairstroke Machine Brows</p>
                        <p>Mega Volume lashes are 5-15 extensions glued to one single natural lash. These lashes are very light weight (normally .03 or .04). This creates a dense black lash line. A full set takes 3 hours plus.</p>
                        <p>Price: $400</p>
                        <p>*Price includes perfecting session at 6-8 weeks.</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE RIGHT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-desktop">
                        <p className="service-title">Eyeliner Top + Bottom</p>
                        <p>Eyeliner or lash Enhancement is a very natural dark line in the base of the lashes to create the illusion of thicker lashes. This method lasts 2-3 years</p>
                        <p>Price: $75</p>
                    </div> 
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img service-img-right eyeliner" style={{backgroundImage: 'url("images/sfl-pics/eye-liner/eyeliner4.jpg")'}}></div>
                    <div className="col-md-4 col-md-offset-2 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-mobile">
                        <p className="service-title">Eyeliner Top + Bottom</p>
                        <p>Eyeliner or lash Enhancement is a very natural dark line in the base of the lashes to create the illusion of thicker lashes. This method lasts 2-3 years</p>
                        <p>Price: $400</p>
                        <p>*Price includes perfecting session at 6-8 weeks.</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

    {/*PICTURE LEFT*/}
                <div className="row flex-vert-align">
                    <div className="col-md-5 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-page-img  lips" style={{backgroundImage: 'url("images/sfl-pics/lips/lips2.jpg")'}}>
                    <div className="row lip-caption before">Before</div>
                    <div className="row lip-caption right-after">Right After</div>
                    <div className="row lip-caption healed">Healed</div>
                    </div>
                    <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 service-para-right">
                      <p className="service-title">Lips</p>
                        <p>Lip Blush lasts 3-5 years needing 1-2 year color boosts. Lips are very bright for the first week then heal to a nice tint.</p>
                        <p>Price: $450</p>
                        <p>*Price includes perfecting session at 6-8 weeks.</p>
                    </div> 
                </div>
                <div className="row gray-line"></div>

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

export default PermMakeup;