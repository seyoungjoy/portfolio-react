import React from "react";
import Header from "../Header";

function Contact() {
  return (
    <>
    <Header/>
      <section className="ct-section">
            <h3 className="screen_out">컨텍트 페이지 영역</h3>
            <article className="ct-article">
                <h4 className="screen_out">contact article</h4>
                <div className="contact-main">
                    <div className="contact-text">
                        <p>FRONT END</p>
                        <p>DEVELOPMENT</p>
                        <p>HOTLINE&#9993;</p>
                    </div>
                </div>
                <div className="contact-sub">
                    <p className="contact-mail">
                        <span className="mail-button">CLICK</span>
                        <span className="mail-address">diddpwl80@gmail.com</span>
                    </p>
                    <p>(© SEYOUNG PORTFOLIO 2021)</p>
                </div>

                <div className="floating-form">
                    <button id="hide-menu">
                        <i className="bx bxs-x-circle"></i>
                    </button>
                    <div className="contact-form">
                        <form className="form">
                            
                            <h4 className="contact-tit">Contact Me</h4>
                            <p className="contact-subtit">
                                If you would like to join me, please contact me!
                            </p>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="your email" required></input>
                                <label for="email">your email</label>
                            </div>
                            <div className="input-group">
                                <textarea id="message" rows="6" placeholder="your message"></textarea>
                                <label for="message">your message</label>
                            </div>
                            <button type="submit" id="send-btn">send</button>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    </>
  );
}

export default Contact;