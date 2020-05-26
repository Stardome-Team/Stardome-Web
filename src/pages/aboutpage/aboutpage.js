import React, { useState } from 'react';
import './aboutpage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


const AboutPage = () => {

    const [showPopUp, setShowPopUp] = useState(true)

    const toggleShowPopUp = (showPopUp) =>
    {
        setShowPopUp(prevState => !prevState)
    }
    
    return (
    <div className="aboutpage">
    <div className="bg-image"></div>
        <NavBar/>
        <div className="aboutGrid">
            <div className = "gridElement">
                <h5><strong>Tournaments Organized</strong></h5>
                <i style={{fontSize: "xxx-large"}} class="fas fa-gamepad"></i>
                <p><strong>28 Tournaments</strong></p>

            </div>

            <div className = "gridElement">
                <h5><strong>Participants so far</strong></h5>
                <i style={{fontSize: "xxx-large"}} class="fas fa-users"></i>
                <p><strong>Over 530 participants</strong></p>
            </div>

            <div className = "gridElement">
                <h5><strong>Cash Prizes</strong></h5>
                <i style={{fontSize: "xxx-large"}} class="fas fa-hand-holding-usd"></i>
                <p><strong>$250k +</strong></p>
                
            </div>
        
        </div>

        <div className = "aboutMessage">
            {/* <h2><strong>About Stardome</strong></h2> */}
            <p>Consequat sit Lorem exercitation anim Lorem proident tempor cupidatat elit consectetur sint proident enim adipisicing. Excepteur id ipsum anim pariatur non ad. Exercitation sunt do aliqua ipsum magna consequat occaecat sunt cillum officia nostrud. Id voluptate ut minim quis. Et ea et quis nostrud anim velit occaecat laborum laborum eu nisi ad.

            Ipsum eiusmod culpa sunt aliquip. In nulla ut aute labore aute. Magna do aliquip ullamco aute magna nisi veniam ut excepteur et incididunt aute incididunt laboris. Fugiat elit adipisicing cillum irure voluptate duis dolore est esse pariatur occaecat fugiat ad. Dolore sint fugiat nulla esse dolor ullamco in minim occaecat anim aliqua id.

            Elit voluptate aute et fugiat nisi culpa ex pariatur ea do duis commodo. Id eiusmod in consequat minim do esse non ut nostrud non laborum labore. Ex occaecat commodo in veniam. Esse sint cupidatat adipisicing laboris voluptate in id. Laborum quis magna aliquip dolor proident velit deserunt commodo.

            Ut ut officia commodo adipisicing aliqua do duis fugiat velit. Irure non non ea voluptate quis. Duis enim pariatur proident duis fugiat velit sit fugiat non. Proident exercitation nostrud officia quis. Quis culpa voluptate non dolore quis mollit cupidatat elit aliquip.Ea id adipisicing sunt incididunt pariatur. Ipsum et eiusmod nisi consequat duis amet. Labore laboris amet minim ullamco irure quis velit. Consequat nostrud qui mollit aute tempor fugiat esse commodo Lorem eiusmod ad.Ullamco sit esse amet ut tempor Lorem. Deserunt labore quis ut tempor nulla occaecat do ut aliqua qui dolor est ea minim. Fugiat dolor reprehenderit sit commodo qui laborum amet magna sit elit excepteur deserunt. Elit eu aute esse dolore et cillum eu proident. Deserunt mollit excepteur minim ex officia. Sit do labore do magna ex. Ut do qui ullamco laborum incididunt aliqua laborum non occaecat dolor est cupidatat proident.</p>
        </div>

        <div className="about-grid">
            <div className="grid1">
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Shows</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Channels</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Presenters</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Sponsors</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>About</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Privacy Policy</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>FAQs</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Rules</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Support</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>
            <div className="grid3">
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Advertisement</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Sponsorship</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Press & Resource</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div className="header">
                        <h4 className = "text"><strong>Contact Us</strong></h4>
                        <FontAwesomeIcon onClick={toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display:  showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>

        </div>


        <Footer className = "footer" />
    </div>
    
    )
}

export default AboutPage;