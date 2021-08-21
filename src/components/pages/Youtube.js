import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import { Link } from "react-router-dom";




function Youtube(){
    return (
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
                    <div class="youtube-video-search">
                        <input type="search" id="video-search" name="q" aria-label="Search video"
                            placeholder="원하는 영상을 검색해 보세요."></input>
                        <button class="search-btn">
                            <i class='bx bx-search-alt-2'></i>
                        </button>
                    </div>
                    <div class="youtube-video-cont">

                        <div class="youtube-video-list">
                            <ul>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE</div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE</div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                                <li>
                                    <div class="video"></div>
                                    <div class="video-tit">VIDEO TITLE </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            {/* //Youtube */}
            
            <FooterContact/>
            <Footer />
        </>
        
    )

}



export default Youtube;