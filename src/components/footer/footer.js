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
                    <div className="section-list">How to watch</div>
                    <div className="section-list">Shows</div>
                    <div className="section-list">Channels</div>
                    <div className="section-list">Presenters</div>
                    <div className="section-list">Sponsors</div>
                </div>
                <div className="section1">
                    <div className="section-header">StarDome Info</div>
                    <div className="section-list">About</div>
                    <div className="section-list">Privacy Policy</div>
                    <div className="section-list">FAQs</div>
                    <div className="section-list">Rules</div>
                    <div className="section-list">Support</div>
                </div>
                <div className="section1">
                    <div className="section-header">StarDome Biz</div>
                    <div className="section-list">Advertisment</div>
                    <div className="section-list">Sponsorship</div>
                    <div className="section-list">Press & Resource</div>
                    <div className="section-list">Contact Us</div>
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