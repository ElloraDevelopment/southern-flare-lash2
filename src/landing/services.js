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
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/lash-icon.png" alt="lash-icon"/>
                        <p className="service-text lash-title">Lashes</p>
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col">
                    <Link to="/perm_makeup">
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/lips-icon.png" alt="lash-icon"/>
                        <p className="service-text makeup-desktop">Permanent Makeup</p>
                        <p className="service-text makeup-mobile">Perm. Makeup</p>
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col">
                    <Link to="/waxing">
                        <img className="home-icon img-responsive" src="images/sfl-pics/home-icons/wax-icon.png" alt="lash-icon"/>
                        <p className="service-text">Waxing</p>
                    </Link>
                </div>

                <div className="service-divider">|</div>

                <div className="service-col text-center">
                    <Link to="/facials">
                        <img className="home-icon img-responsive " src="images/sfl-pics/home-icons/face-icon1.png" alt="lash-icon"/>
                        <p className="service-text ">Facials</p>
                    </Link>
                </div>


            </div>
            </div>

{/* <<<<<<< HEAD */}
            <center>
                <a href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
{/* ======= */}
            {/* <center>     */}
                {/* <a target="_blank" href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn"> */}
{/* >>>>>>> landing */}
                    <span className="btn nav-schedule book-now">Book Now</span>
                </a>
            </center>

        </div>
        );
    }
}

export default Services;
