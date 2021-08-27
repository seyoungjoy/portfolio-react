import React from "react";
import Header from "../Header";
import Loader from '../basics/Loader';
import { gsap } from "gsap";

class Contact extends React.Component {
    state = {
      isLoading: true,
    };
  
    mainStart = () => {
        let tl = gsap.timeline();
        tl.to("#header", { duration: 0.4, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".wrapTitle-line", { duration: 0.3, stagger: 0.1, opacity: 1, scaleY: 1, ease: "ease.out" });
        tl.to(".wrapTitle-title .tit", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "bounce.out" });
        tl.to(".wrapTitle-intro1", { opacity: 1, rotationZ: 0, duration: 0.5, ease: "bounce.out" });
        tl.to(".wrapTitle-intro2", { opacity: 1, rotationZ: 0, duration: 0.5, stagger: 0.1, ease: "bounce.out" },"-=0.2");
        tl.to(".wrapTitle-des1-line", { duration: 0.3, stagger: 0.1, opacity: 1, scale: 1, ease: "ease.out" });
        tl.to(".wrapTitle-des1-1", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".wrapTitle-des1-2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des1-3", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des1-4", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".contact-main", { duration: 1, stagger: 0.1, opacity: 1, scale: 1, ease: "bounce.out" },"-=2.7");
        tl.to(".contact-sub p:nth-child(1)", { duration: 0.5, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" },"-=1.7");
        tl.to(".contact-sub p:nth-child(2)", { duration: 0.5, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" },"-=1.3");

    };
  
    getSite = () => {
      setTimeout(() => {
        console.log("두번째 시작");
        this.setState({ isLoading: false });
        this.mainStart();
      }, 1000);
    };
  
    componentDidMount() {
      setTimeout(() => {
        console.log("첫번째 시작");
        this.getSite();
      }, 1000);
    }
  
    render() {
      const { isLoading } = this.state;
      return (
        <div id="wrap" className="lock">
          {isLoading ? (
            <Loader />
          ) : (
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
          )}
        </div>
      );
    }
  }

export default Contact;