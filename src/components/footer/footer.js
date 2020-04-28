import React from 'react';
import Logo from "../../assets/img/stardome_logo.png";
import './footer.scss'

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
                <img src={Logo} className="footer-logo" alt="logo"/>
                <div className="copyright-statement">Copyright &copy; | 2019, Stardome Entertainment Ltd.</div>
            </div>
        </div>
    )
}

export default Footer;