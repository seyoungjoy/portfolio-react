import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Ellipse } from '../assets/img/nav-ellipse.svg';

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
          <li className="nav-ellipse">
            <Ellipse/>
            <Link to ="/">ABOUT</Link>
          </li>
          <li className="nav-ellipse">
            <Ellipse/>
            <Link to ="/project">PROJECT</Link>
          </li>
          <li className="nav-ellipse">
            <Ellipse/>
            <Link to ="/movie">MOVIE</Link>
          </li>
          <li className="nav-ellipse">
            <Ellipse/>
            <Link to ="/youtube">YOUTUBE</Link>
          </li>
          <li className="nav-ellipse">
            <Ellipse/>
            <Link to ="/contact">CONTACT</Link>
          </li>
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