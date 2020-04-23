import React, {Component} from 'react';
import Logo from "../../assets/img/stardome_logo.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import SideBar from './sideBar'
import './navbar.scss';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showHideSidebar: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideSidebar":
        this.setState({ showHideSidebar: !this.state.showHideSidebar });
        break;
    }
  }
  render() {
    const {showHideSidebar} = this.state;
    return (
      <div>
        <div class="w3-container w3-hide-medium w3-hide-small w3-bar w3-black">
        <div className="w3-bar-item"><div className="logo"><img className="logo-image" src={Logo} /></div></div>
        <div ><a href="#" class="w3-bar-item" id="nav-links">HOME</a></div>
        <div ><a href="#" class="w3-bar-item" id="nav-links">TOURNAMENTS</a></div>
        <div ><a href="#" class="w3-bar-item" id="nav-links">MATCH SCHEDULES</a></div>
        <div ><a href="#" class="w3-bar-item" id="nav-links">NEWS</a></div>
        <div ><a href="#" class="w3-bar-item" id="nav-links">ABOUT</a></div>
        <div><a href="#" class="w3-bar-item w3-button w3-right" id="nav-button">SIGN IN</a></div>
        <div><a href="#" class="w3-bar-item w3-right"><img src={Instagram} /></a></div>
        <div><a href="#" class="w3-bar-item w3-right"><img src={Twitter} /></a></div>
        <div><a href="#" class="w3-bar-item w3-right"><img src={Youtube} /></a></div>
        <div><a href="#" class="w3-bar-item w3-right"><img src={Facebook} /></a></div>
        </div>
        <div class="w3-main w3-hide-large">
        {showHideSidebar && <SideBar/>}
        <div className="w3-bar-item w3-left">
          <div className="logo" style={{margin: "0 0 0 20px"}}>
            <img className="logo-image" src={Logo} />
          </div>
        </div>
        <div class="w3-black w3-right">
          <div style={{color: "#457FFF", fontSize: "xx-large", paddingRight: 20+"px", textDecoration: "none"}}>
          <a href="#" onClick={() => this.hideComponent("showHideSidebar")} style={{textDecoration: 'none'}}><i class="fas fa-bars"></i></a>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NavBar;