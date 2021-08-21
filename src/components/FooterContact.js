import React from "react";
import { Link } from "react-router-dom";

function FooterContact() {
  return (
    <section className="contact-section">
        <div className="contact-row">
            <h3 className="contact-title">
                <span className="contact-line"></span>
                <p className="smallTitle">SEE MORE</p>
                <p className="contact-title-1 fontBonV">CONTACT</p>
                <p className="contact-title-2 fontCoco">ME</p>
            </h3>
            <div className="contact-cont">
               <Link to="/contact">
                    <span className="contact-more">SEE MORE</span>
                    <span className="contact-arrow"></span>
                </Link>
            </div>
        </div>
    </section>
  );
}

export default FooterContact;