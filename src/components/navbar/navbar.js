import React from 'react';
import Logo from "../../assets/img/stardome_logo.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import './navbar.scss';

const NavBar = () => (
    <div class="w3-container w3-bar w3-black">
    <div className="w3-bar-item"><div className="logo"><img className="logo-image" src={Logo} /></div></div>
    <div ><a href="#" className="w3-bar-item" id="nav-links">HOME</a></div>
    <div ><a href="#" className="w3-bar-item" id="nav-links">TOURNAMENTS</a></div>
    <div ><a href="#" className="w3-bar-item" id="nav-links">MATCH SCHEDULES</a></div>
    <div ><a href="#" className="w3-bar-item" id="nav-links">NEWS</a></div>
    <div ><a href="#" className="w3-bar-item" id="nav-links">ABOUT</a></div>
    <div><a href="#" className="w3-bar-item w3-button w3-right" id="nav-button">SIGN IN</a></div>
    <div><a href="#" className="w3-bar-item w3-right"><img src={Instagram} /></a></div>
    <div><a href="#" className="w3-bar-item w3-right"><img src={Twitter} /></a></div>
    <div><a href="#" className="w3-bar-item w3-right"><img src={Youtube} /></a></div>
    <div><a href="#" className="w3-bar-item w3-right"><img src={Facebook} /></a></div>
    </div>
  )

export default NavBar;