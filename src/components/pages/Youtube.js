import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import Loader from '../basics/Loader';
import { Link } from "react-router-dom";
import { gsap } from "gsap";


class Youtube extends React.Component {
    state = {
      isLoading: true,
    };
  
    mainStart = () => {
        let tl = gsap.timeline();
        tl.to("#header", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
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
            <Header />
            {/* wraptitle */}
            <section id="wrapTitle-section">
                <div className="wrapTitle-wrap">
                    <h3 className="wrapTitle-title">
                        <span className="wrapTitle-line"></span>
                        <p className="tit">YOUTUBE</p>
                    </h3>
                    <div className="wrapTitle-intro">
                        <p className="wrapTitle-intro1 fontBonV">THAT’S MY</p>
                        <p className="wrapTitle-intro2 fontCoco">YOUTUBE</p>
                    </div>
                    <div className="wraptitle-cont">
                        <div className="wrapTitle-des1">
                            <span className="wrapTitle-des1-line"></span>
                            <p className="wrapTitle-des1-1">SEARCH</p>
                            <p className="wrapTitle-des1-2">FUNCTION</p>
                            <p className="wrapTitle-des1-3">USING</p>
                            <p className="wrapTitle-des1-4">YOUTUBE API</p>
                        </div>
                        <div className="wrapTitle-des2">
                            <span className="wrapTitltArrow"><img src="/img/wraptitle_arrow.svg"></img></span>
                            <span>유튜브 api를 이용해서 동영상을 검색할 수 있게 만들었습니다.유튜브 api를 이용해서 동영상을 검색할 수 있게 만들었습니다.</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* //wraptitle */}

            {/* Youtube */}
            <section id="youtube-video-section">
                <h3 class="screen_out">youtube video 영역</h3>
                <article class="youtube-video-article">
                    <h4 class="screen_out">youtube video 본문 영역</h4>
                    <div class="project-subtit">
                        <div class="subtit-main">YOUTUBE VIDEO</div>
                        <div class="subtit-cont">
                            <div class="subtit-cont-line"></div>
                            <div class="subtit-cont1">
                                <p>Youtube</p>
                                <p>
                                    It is being produced using the YouTube API. please wait a moment. You will be amazed by the results!
                                </p>
                            </div>
                            <div class="subtit-cont2">
                                <p>API</p>
                                <p>
                                    It is being produced using the YouTube API. please wait a moment. You will be amazed by the results!
                                </p>
                                <div class="subtit-cont-line line2"></div>
                            </div>
                        </div>
                    </div>
                    <div class="youtube-video-cont">
                        <p>
                          <a href="https://youngs-you-tube.web.app/" target="_blank"><img src="/img/youtubeApi.png"></img></a>
                        </p>
                    </div>
                </article>
            </section>
            {/* //Youtube */}
            
            <FooterContact/>
            <Footer />
            </>
          )}
        </div>
      );
    }
  }


export default Youtube;