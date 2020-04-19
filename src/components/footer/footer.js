import React from 'react';
import Logo from "../../assets/img/stardome_logo.png";
import './footer.scss'

function Footer (){
    return(
        <div className="footer">
            <img src={Logo} alt="logo"/>
            <div>Copyright &copy; | 2019, Stardome Entertainment Ltd.</div>
        </div>
    )
}

export default Footer;