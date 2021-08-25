import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import Loader from '../basics/Loader';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { gsap } from "gsap";


class About extends React.Component {
    state = {
      isLoading: true,
    };
  
    mainStart = () => {
        let tl = gsap.timeline();
        tl.to("#header", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, rotationZ: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "power4.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(3) > p:nth-child(1)", { duration: 0.5, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(3) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, skewX: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-line", { duration: 0.8, stagger: 0.1, opacity: 1, scaleY: 1, ease: "ease.out" });
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
              <Header info="none"/>
            <main>
                <section id="mainContent">
                <h2 className="screen_out">메인 컨텐츠</h2>
                    <article className="screen-content">
                        <div className="screen-content-main">
                            <div>
                                <p className="wordIam fontCavi">I AM</p>
                                <p className="mainArrow"><img src="/img/arrowsvg.svg" alt="화살표"></img></p>
                                <p className="mainLogo fontSun">
                                    <span>BRIGHT</span>
                                    <span className="mainLogoSymbol">young</span>
                                    <span className="symbol"><img src="/img/symbol.svg"></img></span>
                                </p>
                            </div>
                            <div>
                                <p className="fontCavi">I DO</p>
                                <p className="really fontBonV">REALLY</p>
                                <p className="fontCoco">COOL</p>
                            </div>
                            <div>
                                <p className="fontCoco">CODING</p>
                                <p className="fontBonV">TO BE A REALLY</p>
                            </div>
                            <div>
                                <p className="mainSymbol"><img src="/img/symbol.svg" alt="메인심볼"></img></p>
                                <p className="fontBonV">TALENTED</p>
                                <p className="fontCoco">PEOPLE</p>
                            </div>
                        </div>
                        <div className="screen-line"></div>
                    </article>

                    {/* 메인 소개 */}
                    <article className="main-about">
                        <h3 className="screen_out">메인 소개</h3>
                        <section className="about-cont">
                            <h4 className="screen_out">메인 소개 페이지</h4>
                            <div className="flow-letter">
                                <p className="right fontCavi">
                                    FRONT END DEVELOPMENT 
                                    <span className="fontCoco aboutSymbol">YOUNG</span>
                                </p>
                                <p className="left fontCavi">
                                    FRONT END DEVELOPMENT
                                    <span className="fontCoco aboutSymbol">YOUNG</span>
                                </p>
                            </div>
                            <div className="introduce">
                                <p>
                                    안녕하세요. 다양하고 멋진 효과들을 구현해내고 싶은 프론트엔드 개발자 양세영입니다.
                                </p>
                                <p>
                                    부산의 국비지원학원에서 웹퍼블리셔 6개월 과정을 수료했고 처음으로 해본 코딩이었지만 제가 이렇게까지 즐기면서 집중해본 적은 처음이라 이 분야에 더
                                    욕심이 났습니다.
                                </p>
                                <p>
                                    그래서 서울에 올라와 Javascript, React, Vue, Php 등 다양한 언어들을 배우며 포트폴리오를 준비했습니다.
                                </p>
                                <p>
                                    정성 들여 만든 작업물들을 봐주셔서 정말 감사하고 마음에 드신다면 연락주세요.
                                </p>
                                <p>
                                    일은 센스있게, 코딩은 깔끔하게, 배움은 열정적으로 하겠습니다.
                                </p>
                                <p className="notice">
                                    ※ 저의 포트폴리오는 반응형으로 제작했습니다. 태블릿, 스마트폰에서 보셔도 편하게 감상하실 수 있습니다.<br/>
                                    ※ 본 사이트는 리액트로 다시 제작중입니다. 기대해주세요 :)

                                </p>
                                <p className="contactY"><Link to="/contact">CONTACT YOUNG</Link></p>
                            </div>
                            <div className="introduceTab">
                                <div className="row">
                                    <ul className="tab-menu">
                                        <li className="active">
                                            <Link to="#tabs-1" >
                                                <img src="/img/1.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-2">
                                                <img src="/img/2.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-3">
                                                <img src="/img/3.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-4">
                                                <img src="/img/4.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-5">
                                                <img src="/img/5.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-6">
                                                <img src="/img/6.svg"></img>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="tabs-1" className="tabs clearfix active">
                                            <p className="text-left">
                                                성취감은<br/>
                                                저를 움직이는 원동력입니다.&#128526;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    No matter how difficult it is, I feel a sense of accomplishment when I
                                                    see a
                                                    website that is completed one by one.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-2" className="tabs clearfix">
                                            <p className="text-left">따뜻하고 책임감이 강한<br/>
                                                ENFJ 입니다.&#129392;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    My MBTI is a bright and caring ENFJ. Warm, active, responsible, sociable
                                                    and compassionate.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-3" className="tabs clearfix">
                                            <p className="text-left">
                                                매일 아침<br/>
                                                그날의 계획을 세웁니다.
                                                &#128221;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    Every morning I make a plan for the day. No matter what happens, I tend
                                                    to act in a planned manner.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-4" className="tabs clearfix">
                                            <p className="text-left">자기계발에 관심이 많고<br/>
                                                코딩 공부를 즐깁니다.&#128187;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    I am interested in self-development and enjoy studying coding. Learning
                                                    new things is always fun.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-5" className="tabs clearfix">
                                            <p className="text-left">운동은 주 4회 하며<br/>
                                                체력 관리를 하고있습니다.&#128170;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    I exercise 4 times a week and manage my stamina. Because you have to be
                                                    physically fit to study.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-6" className="tabs clearfix">
                                            <p className="text-left">내 꿈은<br/>
                                                코딩왕&#128081;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    내가 원하는 것들은 모두 구현할 수 있는 수준의 코딩실력을 갖추고 싶습니다. 그것이 진정 코딩왕이 아닐까요?
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                    {/* //메인 소개 */}

                    {/* 메인 스토리 */}
                    <article className="story-article">
                        <h3 className="screen_out">메인 스토리</h3>
                            <section className="main-story">
                                <h4 className="main-story-title">
                                    <span className="story-line" aria-hidden="true"></span>
                                    <p className="story-title-1 fontBonV">THAT’S MY</p>
                                    <p className="story-title-2 fontCoco">STORY</p>
                                </h4>
                                <Swiper
                                    className='swiper-container'
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log("slide change")}
                                    >
                                    <SwiperSlide><img src="/img/story3.jpg" alt="스토리1"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story1.jpg" alt="스토리2"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story2.jpg" alt="스토리3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story6.jpg" alt="스토리3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story5.jpg" alt="스토리3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story4.jpg" alt="스토리3"/></SwiperSlide>
                                </Swiper>
                            </section>
                    </article>
                {/* //메인 스토리 */}
                </section>
            </main>
            <FooterContact/>
            <Footer />
            </>
          )}
        </div>
      );
    }
  }












export default About;