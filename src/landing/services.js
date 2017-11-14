import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
        <div >
            <div className="service-container">
            <div className="services">

                <div className="service-col">
                    <Link to="/lashes">
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/lash-icon.jpg" alt="lash-icon"/>
                        <p className="service-text lash-title">Lashes</p>
                        {/*<div className="home-service mega" style={{backgroundImage: 'url("images/sfl-pics/mega-volume/mega1.jpg")'}}></div>   */}
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col">
                    <Link to="/perm_makeup">
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/lips-icon.jpg" alt="lash-icon"/>
                        <p className="service-text makeup-desktop">Permanent Makeup</p>
                        <p className="service-text makeup-mobile">Perm. Makeup</p>
                        {/*<div className="home-service perm-img" style={{backgroundImage: 'url("https://thumb1.shutterstock.com/display_pic_with_logo/2570710/551368453/stock-photo-permanent-makeup-permanent-tattooing-of-eyebrows-cosmetologist-applying-permanent-make-up-on-551368453.jpg")'}}></div>   */}
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col">
                    <Link to="/waxing">
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/wax-icon.jpg" alt="lash-icon"/>
                        <p className="service-text">Waxing</p>
                        {/*<div className="home-service wax-img" style={{backgroundImage: 'url("images/sfl-pics/home/home-waxing.jpg")'}}></div>   */}
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col text-center">
                    <Link to="/facials">
<<<<<<< HEAD
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/face-icon1.png" alt="lash-icon"/>
                        <p className="service-text facial-icon ">Facials</p>
=======
                        <img className="home-icon img-responsive " src="images/sfl-pics/home-icons/face-icon1.jpg" alt="lash-icon"/>
                        <p className="service-text ">Facials</p>
>>>>>>> landing
                        {/*<div className="home-service face-img" style={{backgroundImage: 'url("images/sfl-pics/home/home-facial.jpg")'}}></div>   */}
                    </Link>
                </div>


            </div>
            </div>

<<<<<<< HEAD
            <center>
                <a href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
=======
            <center>    
                <a target="_blank" href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
>>>>>>> landing
                    <span className="btn nav-schedule book-now">Book Now</span>
                </a>
            </center>

        </div>
        );
    }
}

export default Services;
