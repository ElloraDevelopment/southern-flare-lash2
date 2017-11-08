import React, { Component } from 'react';
import Footer from "../footer.js";
import Navbar from "../navbar.js";

import { Link } from "react-router-dom";

class Facials extends Component {
    render() {
        return (
            <div>
                <div className="wrapper container-fluid">
                    <Navbar />
                    <div className="row text-center service-header">Facials/Treatments</div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                            <p className="service-title">Signature Facial</p>
                            <p>Our signature results driven treatment contains Vitamin C, Hydroxy Acids, and Enzymes to speed up cellular renewal. New technology of Centella Stem Cells support Rosacea and redness prone skin with botanical detoxifying and energizing complexes give noticeable results in just one session.</p>
                            <p>$100</p>
                            <p>50 minutes</p>
                        </div> 
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right desktop-facial">
                            <p className="service-title">Acne Facial</p>
                            <p>With this facial we use a highly effective skin care line that utilizes the most effective acne fighting ingredients and potent anti-inflammatory botanicals. CLEAR CELL is an effective acne skin care line that reduces inflammation, eliminates excess oil, and purifies the skin.</p>
                            <p>$70</p>
                            <p>50 minutes</p>
                        </div> 
                    </div>

                    <div className="row gray-line"></div>
                    <div className="row mobile-facial">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">Acne Facial</p>
                            <p>With this facial we use a highly effective skin care line that utilizes the most effective acne fighting ingredients and potent anti-inflammatory botanicals. CLEAR CELL is an effective acne skin care line that reduces inflammation, eliminates excess oil, and purifies the skin.</p>
                            <p>$70</p>
                            <p>50 minutes</p>
                        </div> 
                    </div>
                    
                    <div className="row gray-line mobile-facial"></div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                            <p className="service-title">Acne Lift/Peel</p>
                            <p>This potent blend of Alpha and Beta Hydroxy Acids contains anti-inflammatory agents to effectively treat and heal acne lesions.</p>
                            <p>$115</p>
                            <p>50 minutes</p>
                        </div> 
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right desktop-facial">
                            <p className="service-title">Ormedic Lift</p>
                            <p>A blend of papaya, pineapple, and mango, this non-chemical peel naturally rebalances, regenerates, and restores your skin using organic ingredients with medical effectiveness.Organic Aloe Vera as a delivery system with pumpkin pulp as an exfoliator. Polypeptides provide maximum rejuvenation and hyaluronic acid adds moisture.</p>
                            <p>$120</p>
                        </div> 
                    </div>

                    <div className="row gray-line"></div>
                    <div className="row mobile-facial">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">Ormedic Lift</p>
                            <p>A blend of papaya, pineapple, and mango, this non-chemical peel naturally rebalances, regenerates, and restores your skin using organic ingredients with medical effectiveness.Organic Aloe Vera as a delivery system with pumpkin pulp as an exfoliator. Polypeptides provide maximum rejuvenation and hyaluronic acid adds moisture.</p>
                            <p>$120</p>
                        </div> 
                    </div>
                    
                    <div className="row gray-line mobile-facial"></div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                            <p className="service-title">Wrinkle Lift/Peel</p>
                            <p>The ultra-resurfacing blend of glycolic and retinol visibly reduces the appearance of fine lines and wrinkles, leaving skin firm and revitalized. Anti-aging blend of glycolic, retinol, and botanical lighteners in an aloe vera gel base to correct, repair and rejuvenate aging skin.</p>
                            <p>$125</p>
                        </div> 
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right desktop-facial">
                            <p className="service-title">O2 Lift</p>
                            <p>This luxurious oxygen skin care treatment infuses oxygen, plant-derived stem cells, peptides and a high concentration of enzymatic botanicals into the skin leaving it luminous, refreshed and rejuvenated.</p>
                            <p>$120</p>
                        </div> 
                    </div>

                    <div className="row gray-line"></div>
                    <div className="row mobile-facial">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">O2 Lift</p>
                            <p>This luxurious oxygen skin care treatment infuses oxygen, plant-derived stem cells, peptides and a high concentration of enzymatic botanicals into the skin leaving it luminous, refreshed and rejuvenated.</p>
                            <p>$120</p>
                        </div> 
                    </div>
                    
                    <div className="row gray-line mobile-facial"></div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">Microdermabrasion</p>
                            <p>Microdermabrasion is a non-chemical, non-invasive procedure that uses a spray of microcrystals to remove the outermost layer of dry, dead skin cells and reveal younger, healthier-looking skin.</p>
                            <p>$30</p>
                            <p> * Add to any facial for an additional $30</p>
                        </div> 
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right desktop-facial">
                            <p className="service-title">DermaPlanning</p>
                            <p>Dermaplaning is a safe and highly effective physical exfoliation procedure. It requires the use of a sterile, surgical scalpel to gently "shave" the skin's surface, removing the top-most layer of dead skin along with fine, vellus hair (aka peach fuzz).</p>
                            <p>$60</p>
                        </div> 
                    </div>
                    
                    <div className="row gray-line"></div>

                    <div className="row mobile-facial">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">DermaPlanning</p>
                            <p>Dermaplaning is a safe and highly effective physical exfoliation procedure. It requires the use of a sterile, surgical scalpel to gently "shave" the skin's surface, removing the top-most layer of dead skin along with fine, vellus hair (aka peach fuzz).</p>
                            <p>$60</p>
                        </div> 
                    </div>

                    <div className="row gray-line mobile-facial"></div>
                    
                    <div className="row">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right">
                            <p className="service-title">Microneedling</p>
                            <p>Microneedling is the latest trend in this quest to stay youthful. It's a procedure that uses fine needles to puncture the skin and create a controlled skin injury in order to rejuvenate skin. ... It's also called skin needling, collagen induction therapy (CIT), and Dry Needling.</p>
                            <p>$250</p>
                        </div> 
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right desktop-facial">
                            <p className="service-title">Airbrush Makeup</p>
                            <p>Airbrush makeup is makeup sprayed onto the skin using an airbrush instead of being applied with sponges, brushes, fingers, or other methods. An airbrush is characterized by 3 major parts. A powered compressor is used to create an even and controllable airflow through a medical grade hose.</p>
                            <p>$75</p>
                        </div> 
                    </div>

                    <div className="row gray-line"></div>
                    <div className="row mobile-facial">
                        <div className="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 service-para-right ">
                            <p className="service-title">Airbrush Makeup</p>
                            <p>Airbrush makeup is makeup sprayed onto the skin using an airbrush instead of being applied with sponges, brushes, fingers, or other methods. An airbrush is characterized by 3 major parts. A powered compressor is used to create an even and controllable airflow through a medical grade hose.</p>
                            <p>$75</p>
                        </div> 
                    </div>

                    <div className="row gray-line mobile-facial"></div>
                    
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

export default Facials;