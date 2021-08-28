import React from 'react';
import Header from '../Header';
import WrapTitle from '../basics/WrapTitle';
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
            <WrapTitle 
                  title="YOUTUBE" 
                  desc1="SEARCH" 
                  desc2="FUNCTION" 
                  desc3="USING" 
                  desc4="OUTUBE API"
                  mainDesc="Youtube API를 respond해 검색한 동영상 목록을 볼 수 있도록 작업했습니다."
                />
            
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