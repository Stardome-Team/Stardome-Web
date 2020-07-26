import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className="w3-top hidden-sidebar " id="hidden-sidebar ">
        <div
          className="w3-sidebar w3-bar-block w3-hide-large w3-card w3-animate-right w3-black z-index"
          style={{ width: "75vw", right: 0, top: 46 + "px" , maxWidth:"280px" }}
          id="mySidebar"
        >
          <div
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            <Link
              style={{ marginTop: 15 + "px", marginBottom: 15 + "px" }}
              id="sidebar-button"
              className="w3-bar-item w3-button w3-right"
              style={{ textDecoration: "none" }}
              to="/auth"
            >
              SIGN IN
            </Link>
          </div>

          <div>
            {" "}
            <Link
              className="w3-bar-item"
              style={{ textDecoration: "none" }}
              to="/"
            >
              HOME
            </Link>
          </div>

          <div>
          <Link className="w3-bar-item" style={{ textDecoration: "none" }} to="/events">
              TOURNAMENTS
            </Link>
          </div>
          <div>
          <Link className="w3-bar-item" style={{ textDecoration: "none" }} to="/#">
              MATCH SCHEDULES
            </Link>
          </div>

          <div>
            {" "}
            <Link
              className="w3-bar-item"
              style={{ textDecoration: "none" }}
              to="/news"
            >
              NEWS
            </Link>
          </div>

          <div>
          <Link className="w3-bar-item" style={{ textDecoration: "none" }} to="/about">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
