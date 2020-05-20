import React from 'react';
import './aboutpage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import HomePageCarousel from '../../components/homePageCarousel/homepagecarousel';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
// import Accordion from 'react-bootstrap/Accordion';

import {Accordion, Card, Button} from 'react-bootstrap';


class aboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            showPopUp: false
        }
        this.toggleShowPopUp = this.toggleShowPopUp.bind(this);
    }


    toggleShowPopUp = () =>
    {
        this.setState({
            showPopUp: !this.state.showPopUp
        });
    }
    render(){
        const {showPopUp} = this.state;
    return (
    <>
    <div className="bg-image"></div>
    <div className="aboutpage">
        <NavBar/>
        <div className = "aboutMessage">
            <h2><strong>About Stardome</strong></h2>
            <p>Consequat sit Lorem exercitation anim Lorem proident tempor cupidatat elit consectetur sint proident enim adipisicing. Excepteur id ipsum anim pariatur non ad. Exercitation sunt do aliqua ipsum magna consequat occaecat sunt cillum officia nostrud. Id voluptate ut minim quis. Et ea et quis nostrud anim velit occaecat laborum laborum eu nisi ad.

            Ipsum eiusmod culpa sunt aliquip. In nulla ut aute labore aute. Magna do aliquip ullamco aute magna nisi veniam ut excepteur et incididunt aute incididunt laboris. Fugiat elit adipisicing cillum irure voluptate duis dolore est esse pariatur occaecat fugiat ad. Dolore sint fugiat nulla esse dolor ullamco in minim occaecat anim aliqua id.

            Elit voluptate aute et fugiat nisi culpa ex pariatur ea do duis commodo. Id eiusmod in consequat minim do esse non ut nostrud non laborum labore. Ex occaecat commodo in veniam. Esse sint cupidatat adipisicing laboris voluptate in id. Laborum quis magna aliquip dolor proident velit deserunt commodo.

            Ut ut officia commodo adipisicing aliqua do duis fugiat velit. Irure non non ea voluptate quis. Duis enim pariatur proident duis fugiat velit sit fugiat non. Proident exercitation nostrud officia quis. Quis culpa voluptate non dolore quis mollit cupidatat elit aliquip.Ea id adipisicing sunt incididunt pariatur. Ipsum et eiusmod nisi consequat duis amet. Labore laboris amet minim ullamco irure quis velit. Consequat nostrud qui mollit aute tempor fugiat esse commodo Lorem eiusmod ad.Ullamco sit esse amet ut tempor Lorem. Deserunt labore quis ut tempor nulla occaecat do ut aliqua qui dolor est ea minim. Fugiat dolor reprehenderit sit commodo qui laborum amet magna sit elit excepteur deserunt. Elit eu aute esse dolore et cillum eu proident. Deserunt mollit excepteur minim ex officia. Sit do labore do magna ex. Ut do qui ullamco laborum incididunt aliqua laborum non occaecat dolor est cupidatat proident.</p>
        </div>

        <div className="aboutGrid">
            <div className = "gridElement">
                <h5><strong>Tournaments Organized</strong></h5>
                <p><strong>28 Tournaments</strong></p>

            </div>

            <div className = "gridElement">
                <h5><strong>Participants so far</strong></h5>
                <p><strong>Over 530 participants</strong></p>
            </div>

            <div className = "gridElement">
                <h5><strong>Cash Prizes</strong></h5>
                <p><strong>$250k +</strong></p>
                
            </div>
        
        </div>

        <div className="about-grid">
            <div className="grid1">
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>
            <div className="grid3">
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
                <div className = "dropUp">
                    <div classNAme="header">
                        <h4 className = "text"><strong>How To Watch</strong></h4>
                        <FontAwesomeIcon onClick={this.toggleShowPopUp} className = "fontStyle" icon = {faAngleDown} />
                    </div>
                    <div style={{display: this.state.showPopUp ? 'block' : 'none' }} className="content">
                        <p>Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal</p>
                    </div>
                </div>
            </div>

        </div>


        <Footer classNAme = "footer" />
    </div>
    </>
        )
    }
}

export default aboutPage;