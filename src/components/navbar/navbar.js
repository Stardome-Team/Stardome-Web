import React from 'react';
import Logo from "../../assets/img/stardome_logo.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import './navbar.scss';

const NavBar = () => (
    <div class="w3-bar w3-border w3-light-grey">
    <a href="#" class="w3-bar-item w3-button">Home</a>
    <a href="#" class="w3-bar-item w3-button">Link 1</a>
    <a href="#" class="w3-bar-item w3-button">Link 2</a>
    <a href="#" class="w3-bar-item w3-button w3-green w3-right">Link 3</a>
    </div>
    // <nav className="w3-bar">
    //   <div className="left-nav">
    //     <div><img src={Logo} /></div>
    //     <div>Home</div>
    //     <div>Tournaments</div>
    //     <div>Match Schedule</div>
    //     <div>About</div>
    //   </div>
    //   <div className="right-nav">
    //     <div>Sign In / Sign Up</div>
    //     <div><img src={Instagram} /></div>
    //     <div><img src={Twitter} /></div>
    //     <div><img src={Youtube} /></div>
    //     <div><img src={Facebook} /></div>
    //   </div>
    // </nav>
  )

export default NavBar;