import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import { Link } from "react-router-dom";




function Movie(){
    return (
        <>
            <Header />

            {/* wraptitle */}
            <section id="wrapTitle-section">
                <div className="wrapTitle-wrap">
                    <h3 className="wrapTitle-title">
                        <span className="wrapTitle-line"></span>
                        <p className="tit">MOVIE</p>
                    </h3>
                    <div className="wrapTitle-intro">
                        <p className="wrapTitle-intro1 fontBonV">THAT’S MY</p>
                        <p className="wrapTitle-intro2 fontCoco">MOVIE</p>
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

            {/* Movie */}
            <section id="movie-section">
                <h3 className="screen_out">movie 영역</h3>
                <article className="movie-article">
                    <h4 className="screen_out">movie 본문 영역</h4>
                    <div className="project-subtit">
                        <div className="subtit-main">FAVORITE MOVIES</div>
                        <div className="subtit-cont">
                            <div className="subtit-cont-line"></div>
                            <div className="subtit-cont1">
                                <p>MOVIE</p>
                                <p>
                                    It is being produced using the MOVIE API. please wait a moment. You will be amazed by the results!
                                </p>
                            </div>
                            <div className="subtit-cont2">
                                <p>API</p>
                                <p>
                                    It is being produced using the MOVIE API. please wait a moment. You will be amazed by the results!
                                </p>
                                <div className="subtit-cont-line line2"></div>
                            </div>
                        </div>
                    </div>

                    <div className="movie-cont">
                        <div className="movie-tit">
                            <p className="fontBonV">MOVIES</p>
                            <p>영화 목록을 확인할 수 있습니다.</p>
                        </div>
                        <div className="movie-search">
                            <input type="search" id="movie-search" name="q" aria-label="Search movie"
                                placeholder="영화를 검색하세요."></input>
                            <button className="search-btn">
                                <i className='bx bx-search-alt-2'></i>
                            </button>
                        </div>
                        <div className="movie-list">
                            <ul>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                            </ul>
                        </div>
                        <div className="movie-tit">
                            <p className="fontBonV">FABOURITES</p>
                            <p>좋아하는 영화 목록을 추가할 수 있습니다.</p>
                        </div>
                        <div className="movie-list">
                            <ul>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                                <li>
                                    <div className="movie-poster"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            {/* //Movie */}

            
            <FooterContact/>
            <Footer />
        </>
        
    )

}



export default Movie;