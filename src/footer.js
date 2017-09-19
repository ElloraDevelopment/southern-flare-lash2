import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="icon-wrapper">
                    <a target="_blank" href="SouthernFlareLash@hotmail.com" className="icons">
                        <FontAwesome name="envelope-o" size="2x"/>
                    </a>

                    <a href="https://www.facebook.com/Southernflarelash/?pnref=lhc" className="icons">
                        <FontAwesome name="facebook" size="2x"/>
                    </a>

                    <a href="https://www.instagram.com/southernflarelash/"className="icons">
                        <FontAwesome name="instagram" size="2x"/>
                    </a>
                </div>
                    <Link to="/careers">
                        <div className="footer-links">Careers</div>
                    </Link>

                    <div><a className="footer-links" href="tel:336-212-0188">336-212-0188</a></div>
                    
                    {/*<div className="col-md-2 col-sm-2 col-xs-2">
                        <img className="footer-logo img-responsive" src="/images/southernflare_sub.png" alt=""/>
                    </div>*/}

                    <div className="footer-address" ><a className="footer-links" href="https://www.google.com/maps/place/316+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986">316 W Midwest Ave Casper, WY 82601</a></div>

            </div>
        )
    }
}

export default Footer;