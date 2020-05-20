import React from 'react';
import {Link} from 'react-router-dom'
import Logo from "../../assets/img/stardome_logo.png";
import './footer.scss'
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";

function Footer (){
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="section1">
                    <div className="section-header">StarDome TV</div>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">How to watch</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Shows</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Channels</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Presenters</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Sponsors</div></Link>
                </div>
                <div className="section1">
                    <div className="section-header">StarDome Info</div>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">About</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Privacy Policy</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">FAQs</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Rules</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Support</div></Link>
                </div>
                <div className="section1">
                    <div className="section-header">StarDome Biz</div>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Advertisment</div></Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Sponsorship</div> </Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Press & Resource</div> </Link>
                    <Link to = "/about" style={{ textDecoration: "none" }}><div className="section-list">Contact Us</div></Link>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={Logo} className="footer-bottom logo" alt="logo"/>
                <div className="footer-icons">
                    <Link to="/"> <img className="footer-icon" alt="instagram logo" src={Instagram} /></Link>
                    <Link to="/auth"> <img className="footer-icon" alt="twitter logo" src={Twitter} /></Link>
                    <Link to="/auth"> <img className="footer-icon" alt="Youtube logo" src={Youtube} /></Link>
                </div>
                <div className="copyright-statement">Copyright &copy; | 2019, Stardome Entertainment Ltd.</div>
            </div>
        </div>
    )
}

export default Footer;