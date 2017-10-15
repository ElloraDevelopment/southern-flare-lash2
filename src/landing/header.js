import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-md-offset-0 col-xs-12">
                    {/*<div className="header-logo" style={{backgroundImage: 'url("images/AlyssaN-Logo-PNG.png")'}}></div>*/}
                    <div className="rectangle">
                        <div className="welcome">Welcome to Southern Flare Lash</div>
                    </div>
                    <img src={'https://thumb9.shutterstock.com/display_pic_with_logo/163837422/584570752/stock-photo-portrait-of-happy-smiling-woman-standing-on-the-square-on-sunny-summer-or-spring-day-outside-cute-584570752.jpg'} className="img-responsive header-logo" alt=""/>
                </div>
            </div>
        );
    }
}

export default Header;