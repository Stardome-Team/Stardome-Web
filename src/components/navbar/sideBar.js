import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';

function SideBar(){
  return (
    <div>
      <div className="hidden-sidebar" id="hidden-sidebar">
      <div class="w3-sidebar w3-bar-block w3-hide-large w3-card w3-animate-right w3-black" style={{width: '40%', right:0, top: 50+'px'}} id="mySidebar">
        {/* <div>
          <button class="w3-bar-item w3-button" onclick="w3_close()"> 
            <div style={{fontSize: "large", textAlign: 'center', marginTop: '15px'}}>
            CLOSE        <i class="fas fa-times"></i>
            </div>
          </button>
        </div> */}
        <div style={{width: "100%", marginLeft: "auto", marginRight: "auto"}}><a href="#" class="w3-bar-item w3-button w3-right" style={{marginTop: 15+"px", marginBottom: 15+"px"}} id="sidebar-button">SIGN IN</a></div>
        <Link style={{textDecoration: 'none'}} to="/">
          <div >
              <a href="" class="w3-bar-item" id="nav-links">HOME</a>
          </div>
        </Link>
        <div ><a href="#" class="w3-bar-item" id="sidebar-nav-links">TOURNAMENTS</a></div>
        <div ><a href="#" class="w3-bar-item" id="sidebar-nav-links">MATCH SCHEDULES</a></div>
        <Link style={{textDecoration: 'none'}} to="/news">
          <div >
              <a href="" class="w3-bar-item" id="nav-links">NEWS</a>
          </div>
        </Link>
        <div ><a href="#" class="w3-bar-item" id="sidebar-nav-links">ABOUT</a></div>
      </div>
      </div>
    </div>
    )
  }

export default SideBar;