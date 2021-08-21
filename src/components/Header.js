import React from 'react';
import { Link } from "react-router-dom";

function Header({info}){
  return (
    <header id="header">
      <h1><Link to="/">
        <p>BRIGHT</p>  
        <p>
          <span>young</span>
          <span className="symbol"><img src="/img/symbol.svg"></img></span>
        </p>
      </Link></h1>
      <nav>
        <ul>
          <li><Link to ="/">ABOUT</Link></li>
          <li><Link to ="/project">PROJECT</Link></li>
          <li><Link to ="/movie">MOVIE</Link></li>
          <li><Link to ="/youtube">YOUTUBE</Link></li>
          <li><Link to ="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <div className="header-ham">
          <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
      </div>


    </header>
      

  )
}

export default Header;