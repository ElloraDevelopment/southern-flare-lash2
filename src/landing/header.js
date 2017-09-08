import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    {/*<div className="header-logo" style={{backgroundImage: 'url("images/AlyssaN-Logo-PNG.png")'}}></div>*/}
                    <img src={"images/AlyssaN-Logo-PNG.png"} className="img-responsive header-logo" alt=""/>
                </div>
            </div>
        );
    }
}

export default Header;