import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div className="row text-center services">
                <Link to="/lashes">
                    <div className="contain col-md-3 col-sm-4 col-xs-4">
                        <div className="circle">
                            <p>Lashes</p>
                        </div>
                    </div>   
                </Link>
                
                <Link to="/perm_makeup">
                    <div className="contain col-md-3 col-sm-4 col-xs-4">
                        <div className="circle">
                            <p>Permanent</p><br/><p>Makup</p>
                        </div>
                    </div> 
                </Link>
                
                <Link to="/waxing">
                    <div className="contain col-md-3 col-sm-4 col-xs-4 ">
                        <div className="circle">
                            <p>Waxing</p>
                        </div>
                    </div> 
                </Link>

                <Link to="/facials">
                    <div className="contain col-md-3 col-sm-4 col-xs-4">
                        <div className="circle">
                            <p>Facials</p>
                        </div>
                    </div> 
                </Link>

            </div>
        );
    }
}

export default Services;