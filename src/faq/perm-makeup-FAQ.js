import React, { Component } from 'react';
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Panel, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

class PermFAQ extends Component {
    render() {
        return (
            <div>
            <div id="lash_FAQ" className="wrapper">
                <Navbar/>
                    <h4 className="text-center faq-title">Frequently Asked Microblading Questions</h4>
                <div className="row accord-contain">
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What is Microblading?" eventKey="1">Microblading (also referred to as Microstroking, Eyebrow Embroidery, Feather Stroke Brows, 3D Brows, or Micro Pigmentation, etc) is the process of manually implanting color pigment beneath the surface of the skin by means of tiny, sterile, disposable needles to produce the appearance of hair strokes. The result is a very natural looking, well shaped, fuller brow that you won’t have to fill in with cosmetics everyday.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="How long is the healing time?" eventKey="2">The eyebrow area will be slightly red after the procedure and color will appear very dark. This is normal for the procedure and part of the healing process. Immediately after your microblading procedure and in the first 10 days, your brows will appear significantly darker and defined than perhaps your desired look. It may continue to get darker over the next few days as scabs begin to form, however this is not an accurate indication of the finished and healed result. 30-50% of your brow color will fade as the scabs fall off within 7-10 days. In some cases, the scabs may take longer to heal and fall off. DO NOT PICK YOUR SCABS. The pigment is within the scab and you do not want to pull any pigment out of your skin prematurely. You'll notice the color is very light right after the two weeks after healing; the skin will have an opaque milky looking quality to it. This is known as the milk skin and is common in tattooing. This is due to the the tissue still healing from the inside out even though the surface of the skin is healed. No down time is required after microblading procedure.  It takes approximately 7-14 days for the brows to heal over, and about 1 month for the color to fully set in.  True color will reveal itself once healed. We all heal differently and what works on one client may not be effective on another so please do not compare your results. The complete healing process takes approximately 6 weeks.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Is it tattooing?" eventKey="3">With the sudden popularity and media attention to the term microblading, many are led to falsely believe microblading is not a tattoo process. Permanent cosmetics, micropigmentation, dermal implantation, microblading/microstroking, eyebrow embroidery, and long-time/long-lasting makeup, are all different names for the same procedure – cosmetic tattooing. Any time pigment  is placed into the skin with any device, it is a tattoo process as defined by many well informed regulators, the medical community, and dictionary sources. Denying this process is a tattoo can be problematic for those who would, for religious or other personal reasons, normally refuse to have a tattoo.</Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="How long does Microblading last?" eventKey="4">
                                <div className="facts">Microblading typically lasts 1-3 years, depending on skin type (normal, oily, dry), age (youthful/mature). Skincare routine will also affect the lasting effect of the pigment: patients who tan, uses products with AHA or Glycolic Acid with fade faster as your skin will resurface faster. Each individual's color retention within the skin will vary. To maintain the brows looking fresh, a touch up is suggested every 18-24 months. Clients can let the microbladed area fade over time, but please note a slight shadow may remain.</div>
                                <br/><strong >Factors that will cause your microbladed brow tattoo fade faster:</strong>
                                <ul>
                                    <li className="bullet-pnt">Iron deficiency</li>
                                    <li className="bullet-pnt">Sun exposure</li>
                                    <li className="bullet-pnt">Exfoliants</li>
                                    <li className="bullet-pnt">Strong immune systems</li>
                                    <li className="bullet-pnt">Exposure to salt water</li>
                                    <li className="bullet-pnt">Smoking</li>
                                </ul>
                            </Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What are the pre and post care procedures?" eventKey="7">
                                <div className="facts">In order to achieve the best results, it is best to follow the PRE and POST care instructions.</div>
                                <br/><strong>Prior to your procedure, clients are advised of the following:</strong>
                                <ul>
                                    <li className="bullet-pnt">Avoid alcohol and aspirin/ibuprofen and any vitamins that may thin your blood for 48 hours. </li>
                                    <li className="bullet-pnt">Do not consume coffee before your procedure</li>
                                    <li className="bullet-pnt">Avoid tanning so we can assess your natural skin tone.</li>
                                    <li className="bullet-pnt">No face scrubs,chemical peels, or Botox at least two weeks prior.</li>
                                    <li className="bullet-pnt">Do not pick/tweeze/wax/perform electrolysis one week before procedure.</li>
                                    <li className="bullet-pnt">Do not work out the day of the procedure.</li>
                                    <li className="bullet-pnt">Do not take Fish Oil or Vitamin E one week prior (natural blood thinners)</li>
                                    <li className="bullet-pnt">Do not wax or tint your eyebrows 3 days before the procedure.</li>
                                    <li className="bullet-pnt">Feel free to come in with their brow makeup on so our technician can see your every day look you prefer. Reference pictures of shapes and colors of brows are always welcomed. We will then work together to create the perfect brows!</li>
                                </ul> 
                                <br/><strong>After your procedure, clients MUST follow these instructions:</strong>
                                <ul>
                                    <li className="bullet-pnt">Day 1: 2 hours after the procedure, clean brows using a q-tip or cotton round and lightly moisten with distilled water. Gently wipe away the old healing balm and any lymphatic liquid (clear yellowish liquid) that may have built up. Lightly pat dry with tissue and using a new q-tip or cotton round, re-apply healing balm to the brows. Repeat this step every hour for the first day.</li>
                                    <li className="bullet-pnt">Day 2-10: Gently wash your eyebrows each morning and night with water and an antibacterial soap like Dial Soap, Cetaphil or Neutrogena.  With a very light touch, use your fingertips to gently cleanse the eyebrows. Rub the area in a smooth motion for 10 seconds and rinse with water ensuring that all soap is rinsed away. To dry, gently pat with a clean tissue. DO NOT use any cleansing products containing acids (glycolic, lactic, or AHA), or any exfoliants.  Apply a rice grain amount of Grape Seed Oil with a cotton swab and spread it across the treated area. Be sure not to over-apply as this will suffocate your skin and delay healing. The oil should be barely noticeable on the skin. Never put the oil on a wet or damp tattoo..</li>
                                    <li className="bullet-pnt">Do not immerse brow area in water for 10 days. When showering, make sure to avoid face area. Do not go swimming, tanning or into saunas for at least 10 days.</li>
                                    <li className="bullet-pnt"><strong>Do not put makeup on the brow area for a minimum of 10 days.</strong>Microbladed area is an open wound, using makeup may cause infections.</li>
                                    <li className="bullet-pnt">Avoid alcohol and aspirin/ibuprofen and any vitamins that may thin your blood for 24 hours. </li>
                                    <li className="bullet-pnt">Brow area will feel slightly itchy as it heals and will start to lightly scab over. <strong>Do not peel or pick at the scabs</strong>as this can affect the outcome and pigmentation.</li>
                                    <li className="bullet-pnt">No face scrubs or chemical peels at least 2 weeks after.</li>
                                    <br/><strong>Important Reminders</strong>
                                    <li className="bullet-pnt">Use a fresh pillowcase</li>
                                    <li className="bullet-pnt">Let any scabbing or dry skin naturally exfoliate away. Picking can cause scarring or loss of color</li>
                                    <li className="bullet-pnt">No facials, botox, chemical treatments or microdermabrasion for 4 weeks</li>
                                    <li className="bullet-pnt">Avoid hot, sweaty exercise for one week</li>
                                    <li className="bullet-pnt">Avoid direct sun exposure or tanning for 4 weeks after procedure.  Wear a hat when outdoors.</li>
                                    <li className="bullet-pnt">Avoid heavy sweating and long hot showers for the first 10 days.</li>
                                    <li className="bullet-pnt">Avoid sleeping on your face for the first 10 days.</li>
                                    <li className="bullet-pnt">Avoid swimming, lakes, hot tubs for the first 10 days.</li>
                                    <li className="bullet-pnt">Avoid topical makeup including sunscreen on the area.</li>
                                    <li className="bullet-pnt">DO NOT rub, pick or scratch the treated area.</li>
                                </ul> 
                            </Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Who is NOT suitable for Microblading?" eventKey="5">
                                <strong>Anyone Who...</strong>
                                 <ul>
                                    <li className="bullet-pnt">Have heart conditions or using heart medications.</li>
                                    <li className="bullet-pnt">Accutane within the past year.</li>
                                    <li className="bullet-pnt">Have diabetes (will require a physician's note).</li>
                                    <li className="bullet-pnt">Skin irritations or Psoriasis near the treated area (rashes, sunburn, acne, etc.).</li>
                                    <li className="bullet-pnt">Have had Botox in the last 2 weeks.</li>
                                    <li className="bullet-pnt">Have gotten a deep tan or chemical peels in the last 2 weeks.</li>
                                    <li className="bullet-pnt">Allergic to lidocaine, prilocaine, benzocaine, tetracaine or epinephrine.</li>
                                    <li className="bullet-pnt">Anyone who has any serious medical conditions may require a physician's note.</li>
                                    <li className="bullet-pnt">Pregnant or Nursing clients.</li>
                                    <li className="bullet-pnt">History of Keloids or Hypertrophic scarring.</li>
                                    <li className="bullet-pnt">Chemotherapy (consult your doctor).</li>
                                    <li className="bullet-pnt">Epilepsy</li>
                                    <li className="bullet-pnt">Pacemaker or major heart problems.</li>
                                    <li className="bullet-pnt">Sick (cold, flu, etc.) Viral infections and/or diseases.</li>
                                    <li className="bullet-pnt">Any treatment, medication, or illness that compromises the immune system / healing would make you NOT a good candidate for micro-pigmentation procedures.</li>
                                </ul> 
                            </Panel>
                        </Accordion>  
                    </div>

                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="Can you microblade over an existing brow tattoo?" eventKey="6">Microblading can be done over an existing brow tattoo, however the old tattoo must be significantly faded for the hair strokes to show through and look natural. Please advise if you have an existing tattoo and submit a picture to determine if you are a candidate for this procedure. If not a good candidate we will discuss what other options you have.</Panel>
                        </Accordion>  
                    </div>
                    
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <Accordion>
                            <Panel header="What are your cancellations/missed appointments policies?" eventKey="7">When booking your Permanent Makeup appointment a $100 NON REFUNDABLE deposit is required to hold your spot. Any cancelations made will result in the loss of your deposit. Rescheduling must be done one week prior to appointment time. No Shows or less than a 24 hour cancelation may result in being charged the full service amount.</Panel>
                        </Accordion>  
                    </div>

                </div>

                <center>    
                    <a activeHref href="https://www.schedulicity.com/scheduling/SFLPW8" className="custom-nav-btn">
                        <span className="btn nav-schedule book-now">Book Now</span>
                    </a>
                </center>

                 <div className="row text-center any-questions faq-contact">
                    Feel free to <Link className="contact-link" to="/contact">CONTACT US</Link> with any questions about our services.
                </div>
            </div>
                <Footer />
            </div>
        );
    }
}

export default PermFAQ;