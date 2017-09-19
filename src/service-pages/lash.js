import React, { Component } from 'react';
import Navbar from "../navbar.js";
import Footer from "../footer.js";

class Lash extends Component {
    render() {
        return (
        <div>
            <div className="wrapper container-fluid">
                <Navbar />
                <div className="row text-center">
                    <h1>Lash Services</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-1 lash-img classic" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbgRREvvjgzgYplgVKFc173gvO-Oiyxppl65VqgAWRHPsLTDs")`}}>
                        <h4>Classic Lashes</h4>
                        <p>One extension attached to one single natural lash. Classic lashes are a natural looking set of lashes. Classic Lashes normally take 1 1/2 to 2 hours for a full set and 45-60 minutes for a fill</p>
                    </div>
                    <div className="col-md-4 col-md-offset-1 lash-img classic" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbgRREvvjgzgYplgVKFc173gvO-Oiyxppl65VqgAWRHPsLTDs")`}}>
                        <h4>Classic Lashes</h4>
                        <p>One extension attached to one single natural lash. Classic lashes are a natural looking set of lashes. Classic Lashes normally take 1 1/2 to 2 hours for a full set and 45-60 minutes for a fill</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Lash;