import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="icon-wrapper">
                <a target="_blank" href="tel:+1-307-277-1828" className="icons">
                        <FontAwesome name="phone" size="2x"/>
                    </a>
                    <a href="mailto:southernFlareLash@hotmail.com" className="icons">
                        <FontAwesome name="envelope-o" size="2x"/>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/Southernflarelash/?pnref=lhc" className="icons">
                        <FontAwesome name="facebook" size="2x"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/southernflarelash/" className="icons">
                        <FontAwesome name="instagram" size="2x"/>
                    </a>
                </div>
                
                    <Link className="footer-links footer-inline" to="/contact">Contact</Link>

                    <Link to="/careers">
                        <div className="footer-links footer-inline">Careers</div>
                    </Link>
                    <Link to="/login">
                        <div className="footer-links footer-inline">Login</div>
                    </Link>

                    <div><a className="footer-links" target="_blank" href="tel:307-277-1828">307-277-1828</a></div>

                    <div><a className="footer-links" target="_blank" href="https://github.com/ElloraDevelopment">Created by Ellora Dev<FontAwesome className="git-icon" name="github" size="1x"/></a></div>
                
            </div>
        )
    }
}

export default Footer;
