import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className='align-left'>
                    <Link to="/login"><div className="footer-links padding-bottom">Admin Login</div></Link>
                    <div className="footer-copyright footer-inline padding-bottom">&copy; 2017 Southern Flare Lash</div>
                    <div><a className="footer-links footer-inline" target="_blank" href="https://www.Elloradev.com">Website Created by Ellora Dev</a></div>
                </div>


                <div className="icon-wrapper align-right">
                    <a href="tel:+1-336-212-0188" className="icons">
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
            </div>
        )
    }
}

export default Footer;
