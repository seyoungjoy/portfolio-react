import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import { Link } from "react-router-dom";




function Project(){
    return (
        <>
            <Header />

            {/* wraptitle */}
            <section id="wrapTitle-section">
                <div className="wrapTitle-wrap">
                    <h3 className="wrapTitle-title">
                        <span className="wrapTitle-line"></span>
                        <p className="tit">PROJECT</p>
                    </h3>
                    <div className="wrapTitle-intro">
                        <p className="wrapTitle-intro1 fontBonV">THAT’S MY</p>
                        <p className="wrapTitle-intro2 fontCoco">PROJECT</p>
                    </div>
                    <div className="wraptitle-cont">
                        <div className="wrapTitle-des1">
                            <span className="wrapTitle-des1-line"></span>
                            <p className="wrapTitle-des1-1">WEBSITE</p>
                            <p className="wrapTitle-des1-2">JAVASCRIPT</p>
                            <p className="wrapTitle-des1-3">ANIMATION</p>
                            <p className="wrapTitle-des1-4">PROJECT</p>
                        </div>
                        <div className="wrapTitle-des2">
                            <span className="wrapTitltArrow"><img src="/img/wraptitle_arrow.svg"></img></span>
                            <span>WEBSITE, VANILLA JAVASCRIPT, CSS ANIMATION 작업물들을 감상해주세요! 아래 세가지 탭 메뉴를 클릭해 주시면 감사하겠습니다:)</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* //wraptitle */}

            {/* project */}
            <section id="project-section">
                <h3 className="screen_out">project 영역</h3>
                <article className="project-article">
                    <h4 className="screen_out">project 본문 영역</h4>
                    <div className="tab-wrapper">
                        <div className="nav">
                            <ul className="tab-menu">
                                <li>
                                    <img src="/img/tabimage1.jpg" alt="웹사이트"></img>
                                    <Link to="#website">WEB SITE</Link>
                                </li>
                                <li>
                                    <img src="/img/tabimage2.jpg" alt="웹사이트"></img>
                                    <Link to="#script">SCRIPT</Link>
                                </li>
                                <li>
                                    <img src="/img/tabimage3.jpg" alt="웹사이트"></img>
                                    <Link to="#animation">ANIMATION</Link>
                                </li>
                            </ul>
                            <span className="highlight"></span>
                        </div>
                        <div className="tab-content">
                            <div id="website">
                                <div className="project-subtit">
                                    <div className="subtit-main">WEBSITE PROJECTS</div>
                                    <div className="subtit-cont">
                                        <div className="subtit-cont-line"></div>
                                        <div className="subtit-cont1">
                                            <p>TECHNOLOGY</p>
                                            <p>
                                                새로운 기술들은 더 편리하게, 더 멋진 효과들을 구현할 수 있게 도와줍니다. 그래서 REACT, VUE, PHP 등 새로운 언어들을 배우는게 더 즐거웠습니다. 이들을 이용해 더 다양한 웹사이트들을 제작하고 싶습니다.
                                            </p>
                                        </div>
                                        <div className="subtit-cont2">
                                            <p>THINKING</p>
                                            <p>
                                                어떻게 하면 사용자의 시선을 사로잡으면서 편리하게 웹사이트를 이용할 수 있을지 고민하며 만든 웹사이트들입니다. 직접 기획부터 디자인, 코딩까지 한 크리스피크림, 한국지식재산보호원 사이트는 그 홈페이지의 목적에 부합하도록 제작했습니다.
                                            </p>
                                            <div className="subtit-cont-line line2"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <ul>
                                        <li className="project1">
                                            <div className="cont">
                                                <p className="num">PROJECT 1</p>
                                                <p className="tit">
                                                    <span className="fontBonV">PORTFOLIO</span>
                                                    <span>
                                                        첫번째로 만든 포트폴리오입니다. 저는 어떤 사람인지, 어떤 작업들을 해왔는지, 어떤 기술들을 사용할 수 있는지 확인하실 수 있습니다. 바람에 흔들리지만 묵묵히 자신의 일을 하는 나뭇잎을 잘 봐주세요. 마치 저와 같거든요!
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="https://seyoungjoy.github.io/portfolio/port/" target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <video width="750" height="100%" src="/img/site1.mp4" autoplay
                                                    muted loop></video>
                                            </div>
                                        </li>
                                        <li className="project2">
                                            <div className="cont">
                                                <p className="num">PROJECT 2</p>
                                                <p className="tit">
                                                    <span className="fontBonV">VUE WEBSITE</span>
                                                    <span>
                                                        Vue를 이용해 간단한 웹 사이트를 제작했습니다.
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="https://youngsvue.web.app/" target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <img src="/img/web2.jpg"></img>
                                            </div>
                                        </li>
                                        <li className="project3">
                                            <div className="cont">
                                                <p className="num">PROJECT 3</p>
                                                <p className="tit">
                                                    <span className="fontBonV">PHP WEBSITE</span>
                                                    <span>
                                                        php를 사용해 웹 페이지를 제작하였습니다. 댓글 기능, 게시판, 로그인, 회원가입 기능을 넣었습니다. phpMyAdmin에 접속한 후 현재 프로젝트에서 사용하고 있는 DB에 들어가 데이터들을 수정, 삭제, 복사 등을 할 수 있습니다.
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="http://fejoy95.dothome.co.kr/php/pages/main.php" target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <img src="/img/web3.jpg"></img>
                                            </div>
                                        </li>
                                        <li className="project5">
                                            <div className="cont">
                                                <p className="num">PROJECT 4</p>
                                                <p className="tit">
                                                    <span className="fontBonV">WINIX<br /> RESPONSIVE</span>
                                                    <span>
                                                        위닉스 홈페이지를 리뉴얼하여 만들었습니다. 사용자들이 위닉스 홈페이지에 접속한다면 무엇이 필요한지를 생각하며 내용을 구성했습니다. 제품 등록, 제품 종류, 추천 제품, 이벤트, 고객센터 순으로 나열했고 미디어쿼리를 이용한 반응형으로 제작했습니다.
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="https://seyoungjoy.github.io/portfolio/port/project/project5/"
                                                        target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <img src="/img/web5.jpg"></img>
                                            </div>
                                        </li>
                                        <li className="project6">
                                            <div className="cont">
                                                <p className="num">PROJECT 5</p>
                                                <p className="tit">
                                                    <span className="fontBonV">KOIPA</span>
                                                    <span>
                                                        한국지식재산보호원 홈페이지를 기획부터 디자인, 퍼블리싱까지 진행한 프로젝트입니다. 공기업의 신뢰성 있는 이미지를 위해 파란색을 주색상으로 최대한 깔끔하게 디자인해서 코딩했습니다.
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="https://seyoungjoy.github.io/portfolio/port/project/project6/" target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <img src="/img/web6.jpg"></img>
                                            </div>
                                        </li>
                                        <li className="project7">
                                            <div className="cont">
                                                <p className="num">PROJECT 6</p>
                                                <p className="tit">
                                                    <span className="fontBonV">KRISPY KREME</span>
                                                    <span>
                                                        처음으로 진행한 리뉴얼 프로젝트입니다. 기획-디자인-퍼블리싱까지 혼자서 했고 크리스피크림 도넛의 맛있는 느낌을 살리기 위해 입맛 돋는 붉은 컬러를 주색상으로 사용했습니다. 서브 페이지 '메뉴'도 함께 작업했습니다.
                                                    </span>
                                                </p>
                                                <p className="view">
                                                    <Link to="https://seyoungjoy.github.io/portfolio/port/project/project7/"
                                                        target="_blank">
                                                        <span className="view-text">VIEW SITE</span>
                                                        <span className="view-arrow">
                                                            <img src="/img/project-arrow.svg"></img>
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                            <div className="mockup">
                                                <img src="/img/web7.jpg"></img>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            {/* //project */}
            

            

            
            <FooterContact/>
            <Footer />
        </>
        
    )

}



export default Project;