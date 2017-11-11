import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div className="header-container">
            <div className="flex-parent">
                {/*<img className="img-header header-img-mobile img-responsive" src="images/sfl-pics/header/header-img.jpg" alt="headaer-img"/>
                <img className="img-header header-img-desktop img-responsive" src="images/sfl-pics/header/header-img-wider-side.jpg" alt="headaer-img"/>*/}
                <img className="img-header header-img-desktop img-responsive" src="images/sfl-pics/header/pretty-pic.jpg" alt="headaer-img"/>
            </div>
        </div>

        );
    }
}

export default Header;
