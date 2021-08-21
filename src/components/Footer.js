import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
          <div className="footer-cont-row1">
              <Link to="/">
                  <p className="fontSun">BRIGHT</p>
                  <p className="symbol fontSun">young</p>
              </Link>
          </div>
          
          <ul className="footer-cont-row2">
              <li>Front End Development : Yang Se Young</li>
              <li>PHONE : 010 2242 2378</li>
              <li>ⓒ Bright Young’s Portfolio 2021</li>
          </ul>
          <div className="footer-cont-row3">
              <div className="email">
                  <Link to="/contact">diddpwl80@gmail.com</Link>
              </div>
              <div className="coding">
                  <p><img src="/img/symbol.svg"></img></p>
                  <p>With love from coding</p>
              </div>
              <div className="footer-social">
                  <p>GET SOCIAL <span class="smile">:)</span></p>
                  <p className="footer-line"></p>
                  <p className="footer-sns-list">
                      <span><Link to="https://github.com/seyoungjoy" target="_blank">
                              <img src="/img/sns1.png"></img>
                              </Link></span>
                      <span><Link to="https://diddpwl80.gitbook.io/study/" target="_blank">
                              <img src="/img/sns2.png"></img>
                          </Link></span>
                      <span><Link to="https://bongbongdang.tistory.com/" target="_blank">
                              <img src="/img/sns3.png"></img>
                          </Link></span>
                  </p>
              </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;