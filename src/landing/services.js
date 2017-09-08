import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div className="row text-center services">
                <Link to="/lashes">
                    <div className="contain col-md-3 col-sm-3 col-xs-3 ">
                        <div className="circle">
                            <p>Lashes</p>
                        </div>
                    </div>   
                </Link>
                
                <Link to="/perm_makeup">
                    <div className="contain col-md-3 col-sm-3 col-xs-3 ">
                        <div className="circle">
                            <p>Permanent Makeup</p>
                        </div>
                    </div> 
                </Link>
                
                <Link to="/waxing">
                    <div className="contain col-md-3 col-sm-3 col-xs-3 ">
                        <div className="circle">
                            <p>Waxing</p>
                        </div>
                    </div> 
                </Link>

                <Link to="/facials">
                    <div className="contain col-md-3 col-sm-3 col-xs-3">
                        <div className="circle">
                            <p>Lashes</p>
                        </div>
                    </div> 
                </Link>

            </div>
        );
    }
}

export default Services;