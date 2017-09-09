import React, { Component } from 'react';
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Panel, Accordion } from "react-bootstrap";

class LashFAQ extends Component {
    render() {
        return (
            <div id="lash_FAQ">
                <Navbar/>
                    <h4 className="text-center faq-title">Frequently Asked Lash Questions</h4>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What are Eyelash Extensions?" eventKey="1">Eyelash Extensions are a synthetic lash material glued to one single individual natural lash with a professional grade adhesive.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="How often do extensions need to be filled?" eventKey="2">Fills happen about every 2 to 3 weeks. At your fill appointment older grown out lashes will be safely removed and extension will be applied to all natural lashes not containing a extension.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Why do I need fills every two to three weeks?" eventKey="3">Like our hair sheds our lashes do as well. We loose about 3-5 natural lashes everyday. With that loss comes new lashes that need extensions applied.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Do lash extensions damage your natural lashes?" eventKey="4">No! Untrained technicians and not properly caring for your lashes can damage your natural lashes. Properly train lash artists know how to determine a healthy lash weight and length for your natural lashes. Here at Southern Flare Lash + Beauty Bar we strive to keep you lashes deathly and our goal is integrity of the natural lash.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What types of extensions do you offer?" eventKey="5">
                                <div><strong>Classic Lashes:</strong> classic lashes are one extension attached to one single natural lash. Classic lashes are a natural looking set of lashes. Classic Lashes normally take 1 1/2 to 2 hours for a full set and 45-60 minutes for a fill.</div>
                                <div><strong>Volume Lashes:</strong> Volume lashes consist of 2-6 light weight extensions attached to one natural lash. Volume lashes create a fuller look. Volume lash weights vary depending on clients natural lash thickness and health. A full set of volume lashes take about 2 1/2 to 3 hours to complete with fills at an hour to 1 1/2.</div>
                                <div><strong>Mega Volume:</strong> 5-15 extensions glued to one single natural lash. These lashes are an even lighter weight (normally .03 or .04) than volume lashes. Mega volume creates a dense black lash line. A fullest takes 3 hours plus.</div>
                            </Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="How should I show up to my lash appointment?" eventKey="6">Please show up to your lash appointment with NO eye makeup one. This will ensure we can clean all oils off prior to your fill giving you the best bond and long lasting lashes. Showing up with makeup can possibly affect how long your lashes last.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Do I need to wear mascara?" eventKey="7">No! We ask that you refrain from wearing mascara with your eyelash extensions. With proper care you will not need mascara. Mascara can break down your lash glue causing the extensions to shed prematurely. </Panel>
                        </Accordion>  
                    </div>
                    
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What should I expect at my first lash appointment?" eventKey="7"> When you walk in our doors you will be greeted by one of our staff members. There you will fill out a little paperwork before we can begin. All new lash appointments begin with a full consultation and mapping of you lashes. This helps us determine what type of lashes would be best for you and helps us shape the design to compliment your eyes. At every fill you will be cleansed and prepped to being the appointment. </Panel>
                        </Accordion>  
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default LashFAQ;