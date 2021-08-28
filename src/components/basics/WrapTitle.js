import React from "react";

function Loader(props) {
    return (
      <>
        <section id="wrapTitle-section">
            <div className="wrapTitle-wrap">
                <h3 className="wrapTitle-title">
                    <span className="wrapTitle-line"></span>
                    <p className="tit">{props.title}</p>
                </h3>
                <div className="wrapTitle-intro">
                    <p className="wrapTitle-intro1 fontBonV">THAT’S MY</p>
                    <p className="wrapTitle-intro2 fontCoco">{props.title}</p>
                </div>
                <div className="wraptitle-cont">
                    <div className="wrapTitle-des1">
                        <span className="wrapTitle-des1-line"></span>
                        <p className="wrapTitle-des1-1">{props.desc1}</p>
                        <p className="wrapTitle-des1-2">{props.desc2}</p>
                        <p className="wrapTitle-des1-3">{props.desc3}</p>
                        <p className="wrapTitle-des1-4">{props.desc4}</p>
                    </div>
                    <div className="wrapTitle-des2">
                        <span className="wrapTitltArrow"><img src="/img/wraptitle_arrow.svg"></img></span>
                        <span>{props.mainDesc}</span>
                    </div>
                </div>
            </div>
        </section>
      </>    
    );
  }







export default Loader;