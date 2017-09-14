import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div className="row text-center services">
                <Link to="/lashes">
                    <div className="contain col-md-3 col-sm-6 col-xs-6 ">
                        <div className="circle">
                            <p className="service-text">Lashes</p>
                        </div>
                    </div>   
                </Link>
                
                <Link to="/perm_makeup">
                    <div className="contain col-md-3 col-sm-6 col-xs-6 ">
                        <div className="circle">
                            <p className="service-text">Permanent</p><br/><p>Makup</p>
                        </div>
                    </div> 
                </Link>
                
                <Link to="/waxing">
                    <div className="contain col-md-3 col-sm-6 col-xs-6 ">
                        <div className="circle">
                            <p className="service-text">Waxing</p>
                        </div>
                    </div> 
                </Link>

                <Link to="/facials">
                    <div className="contain col-md-3 col-sm-6 col-xs-6 ">
                        <div className="circle">
                            <p className="service-text">Facials</p>
                        </div>
                    </div> 
                </Link>

            </div>
        );
    }
}

export default Services;