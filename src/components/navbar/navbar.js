import React from 'react';
import Logo from "../../assets/stardome_logo.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import './navbar.scss';

const NavBar = () => (
    <nav className="navbar">
      <div className="left-nav">
        <div><img src={Logo} /></div>
        <div>Home</div>
        <div>Tournaments</div>
        <div>Match Schedule</div>
        <div>About</div>
      </div>
      <div className="right-nav">
        <div>Sign In / Sign Up</div>
        <div><img src={Instagram} /></div>
        <div><img src={Twitter} /></div>
        <div><img src={Youtube} /></div>
        <div><img src={Facebook} /></div>
      </div>
    </nav>
  )

export default NavBar;