import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../App";
import Logo from "../../assets/img/stardome_logo.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import SideBar from './sideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';

const NavBar = (props) => {

  const contxt = React.useContext(AuthContext)

  const [showHideSidebar, setShowHideSidebar] = useState(false)

  const hideComponent = (name) => {
    switch (name) {
      case "showHideSidebar":
        setShowHideSidebar(prevState => !prevState)
        break;
    }
  }
    return (
      <div className="z-index nav-collection">
        <div className="w3-top w3-container w3-hide-medium w3-hide-small w3-bar w3-black">
          <div className="w3-bar-item">
            <div className="logo">
              <img className="logo-image" src={Logo} alt="Logo of stardome" />
            </div>
          </div>

          
          {
          props.authTokens ?
          <React.Fragment>
            <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/">
            HOME
            </Link>

            <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/events">
            TOURNAMENTS
            </Link>

            <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/standings">
            STANDINGS
            </Link>
          
            
            <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/news">
            NEWS
            </Link>

            <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/about">
            ABOUT
            </Link>
          
              <Link id="nav-button" className="w3-bar-item w3-right" to="/auth">SIGN IN</Link>

              <Link id="socials" to="/"  className="w3-bar-item w3-right" > <img alt="instagram logo" src={Instagram} /></Link>
              <Link id = "socials" className="w3-bar-item w3-right" to="/auth"> <img alt="twitter logo" src={Twitter} /></Link>

              <Link id = "socials" className="w3-bar-item w3-right" to="/auth"> <img alt="Youtube logo" src={Youtube} /></Link>

              {/* <Link className="w3-bar-item w3-button w3-right" to="/auth"> <img alt="Facebook logo" src={Facebook} /></Link> */}
          </React.Fragment>
          :
          <React.Fragment>
          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/">
          HOME
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/events">
          TOURNAMENTS
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/standings">
          STANDINGS
          </Link>
        
          
          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/news">
          NEWS
          </Link>

          <Link className="w3-bar-item move-nav" style={{ textDecoration: "none" }} to="/about">
          ABOUT
          </Link>
        
            {/* <Link id="nav-button" className="w3-bar-item w3-right" onClick={props.logout}>SIGN OUT</Link> */}
            <Link id="socials profile" to="/" style={{marginTop: '1.1'+'%'}} className="w3-bar-item w3-right w3-dropdown-hover" >
              <FontAwesomeIcon style={{fontSize: '35'+'px'}} icon={faUserCircle} />
                <div className="w3-dropdown-content w3-bar-block w3-card-4" style={{position: 'fixed', marginLeft: '-45'+'px'}}>
                  <Link href="#" className="w3-bar-item w3-button">Profile</Link>
                  <Link href="#" onClick={contxt.logout} className="w3-bar-item w3-button">Logout</Link>
                </div>
            </Link>
            <Link id="socials" to="/"  className="w3-bar-item w3-right" > <img alt="instagram logo" src={Instagram} /></Link>
            <Link id = "socials" className="w3-bar-item w3-right" to="/auth"> <img alt="twitter logo" src={Twitter} /></Link>

            <Link id = "socials" className="w3-bar-item w3-right" to="/auth"> <img alt="Youtube logo" src={Youtube} /></Link>
          </React.Fragment>
          }
          
        </div>
        <div className="w3-main w3-top w3-black w3-hide-large">
          {showHideSidebar && <SideBar />}
          <div className="w3-bar-item w3-left">
            <div className="logo" style={{ margin: "0 0 0 20px" }}>
              <img className="logo-image" src={Logo} />
            </div>
          </div>
          <div className="w3-black w3-right ">
            <div
              style={{
                color: "#457FFF",
                fontSize: "xx-large",
                paddingRight: 20 + "px",
                textDecoration: "none",
                paddingLeft: "18px"
              }}
            >
              <a
                href="#"
                onClick={() => hideComponent("showHideSidebar")}
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavBar;